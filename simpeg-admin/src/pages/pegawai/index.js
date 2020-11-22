import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import MenuAppbar from "../../components/MenuAppbar";
import { Box, Container, Typography } from "@material-ui/core";
import ScrollButton from "../../components/ScrollButton";
import DataProvider from "./ContextData";
import AddData from "./AddData";
import ListData from "./ListData";

function IndexPegawai() {
  const { users } = useContext(AuthContext);
  return (
    <DataProvider>
      <MenuAppbar />
      <Container maxWidth="sm">
        <Box mt={2} />
        <Typography component="h1" variant="h4" align="center">
          TAMBAH DATA PEGAWAI BARU
        </Typography>
        <Typography variant="h6" align="center">
          {users.c_username}{" "}{users.c_opd}
        </Typography>
      </Container>
      <Box mt={2} />
      <Container maxWidth="sm">
        <AddData />
      </Container>
      <Box mt={2} />
      <Container maxWidth="md">
        <ListData />
      </Container>
      <ScrollButton />
    </DataProvider>
  );
}

export default IndexPegawai;
