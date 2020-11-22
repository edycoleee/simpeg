import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import MenuAppbar from "../../components/MenuAppbar";
import { Box, Container, Typography } from "@material-ui/core";
import ScrollButton from "../../components/ScrollButton";
import DataProvider from "./ContextData";
import AddData from "./AddData";
import ListData from "./ListData";
import PilihData from "./PilihData";
import DataUtama from "./DataUtama";

function IndexPegDetail() {
  const { users } = useContext(AuthContext);
  return (
    <DataProvider>
      <MenuAppbar />
      <Container maxWidth="sm">
        <Box mt={2} />
        <Typography component="h1" variant="h4" align="center">
          DETAIL DATA PEGAWAI
        </Typography>
        <Typography variant="h6" align="center">
          {users.c_username}{" "}{users.c_opd}
        </Typography>
      </Container>
      <Box mt={2} />
      <Container maxWidth="sm">
        <PilihData />
      </Container>
      <Box mt={2} />
      <Container maxWidth="sm">
        <DataUtama />
      </Container>
        
      {/* <Box mt={2} />
      <Container maxWidth="md">
        <ListData />
      </Container> */}
      <ScrollButton />
    </DataProvider>
  );
}

export default IndexPegDetail;
