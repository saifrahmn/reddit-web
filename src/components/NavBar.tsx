import { Box, Link } from "@chakra-ui/layout";
import React from "react";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Box bg="#F7DB6A" pt={4}>
      B.tech wala Community
      <Link mr={2}>Register</Link>
      <Link> Login</Link>
    </Box>
  );
};
