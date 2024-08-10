import React, { PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { LayoutProps } from "./type";

const Layout:React.FC<PropsWithChildren<LayoutProps>> = ({children}) => {
  return (
    <Box>
        <Toolbar />
        <Container>
            {children}
        </Container>
    </Box>
  )
}

export default Layout