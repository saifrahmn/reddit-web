import { Box, Flex, Link } from "@chakra-ui/layout";
import React from "react";
import NextLink from "next/link";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <Flex bg="#F7DB6A" p={4}>
      BrainWaves
      <Box ml={"auto"}>
        <NextLink href="/register">
          <Link mr={2}>Register</Link>
        </NextLink>
        <NextLink href="/login">
          <Link> Login</Link>
        </NextLink>
      </Box>
    </Flex>
  );
};
