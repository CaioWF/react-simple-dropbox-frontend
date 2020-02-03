import React, { useState, useEffect } from "react";
import { MdInsertDriveFile } from "react-icons/md";
import logo from "../../assets/logo.svg";
import {
  BoxContainer,
  BoxHeader,
  BoxTitle,
  FileList,
  FileItem,
  FileItemLink,
  Upload
} from "./styles";
import api from "../../services/api";
import { formatDistance, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";
import Dropzone from "react-dropzone";
import socket from "socket.io-client";

function Box(props) {
  const [box, setBox] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`boxes/${props.match.params.id}`);

      setBox(response.data);
    }
    fetchData();
  }, [props.match.params.id]);

  useEffect(() => {
    function subscribeToNewFiles() {
      const io = socket("http://localhost:3333");

      io.emit("connectRoom", box._id);

      io.on("file", data => {
        setBox(box => ({ ...box, files: [data, ...box.files] }));
      });
    }

    subscribeToNewFiles();
  }, [box]);

  const handleUpload = files => {
    files.forEach(file => {
      const data = new FormData();
      data.append("file", file);
      api.post(`boxes/${box._id}/files`, data);
    });
  };
  return (
    <BoxContainer>
      <BoxHeader>
        <img src={logo} alt="RocketBox" />
        <BoxTitle>{box.title}</BoxTitle>
      </BoxHeader>
      <Dropzone onDropAccepted={handleUpload}>
        {({ getRootProps, getInputProps }) => (
          <Upload {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Arraste arquivos ou clique aqui</p>
          </Upload>
        )}
      </Dropzone>
      <FileList>
        {box.files &&
          box.files.map((file, index) => (
            <FileItem key={index}>
              <FileItemLink href={file.url} target="_blank">
                <MdInsertDriveFile size={24} color="#A5CFFF" />
                <strong>{file.title}</strong>
              </FileItemLink>
              <span>
                há{" "}
                {formatDistance(parseISO(file.updatedAt), new Date(), {
                  locale: pt
                })}
              </span>
            </FileItem>
          ))}
      </FileList>
    </BoxContainer>
  );
}

export default Box;
