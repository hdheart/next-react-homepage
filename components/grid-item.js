import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItem = ({ children, href, tittle, thumbnail }) => {
  return (
    <Box w="100%" textAlign="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={tittle}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        ></Image>
        <LinkOverlay href={href} target="_blank">
          <Text fontSize={14}>{tittle}</Text>
          <Text fontSize={14}>{children}</Text>
        </LinkOverlay>
      </LinkBox>
    </Box>
  );
};

export const WorkGridItem = ({ children, id, tittle, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={tittle}
          className="grid-item-thumbnail"
          placeholder="blur"
        ></Image>
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {tittle}
          </Text>
        </LinkOverlay>
        <LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkOverlay>
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
            .grid-item-thumbnail {
                border-radius:12px
            }`}
  ></Global>
);
