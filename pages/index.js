import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  List,
  ListItem,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import { BioSection, BioYear } from "../components/bio";
import { IoLogoGithub } from "react-icons/io5";

const Page = () => {
  console.log("index");
  return (
    <Layout title="home">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          color={useColorModeValue("#000000", "#ffffff")}
          mb={6}
          align="center"
        >
          hello,I&apos;m a front-end developer
        </Box>
        <Box display="flex">
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-tittle">
              dalphin
            </Heading>
            <p>a normal person</p>
          </Box>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            maxWidth="100px"
            borderStyle="solid"
            borderRadius="full"
            display="inline-block"
            src="/images/dalphin.jpg"
            alt="profile Image"
          />
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            work
          </Heading>
          <Paragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis
            suscipit eaque? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati
            deserunt nobis suscipit eaque? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Molestias aut, repellat ipsum facere
            voluptate dicta obcaecati deserunt nobis suscipit eaque?
          </Paragraph>
          <NextLink href="/works">
            <Link>Todo</Link>
          </NextLink>
          .
          <Box mt={4} align="center">
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
                color={useColorModeValue("#ffffff", "#000000")}
              >
               My profile
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h2" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            Born in China
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            Graduate at nfu university
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Engage in front-end development
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            I 💗
          </Heading>
          <Paragraph>coding,reading,eating yummy foods</Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            On the web
          </Heading>

          <List>
            <ListItem>
              <Link href="https://github.com/hdheart" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="steal"
                  leftIcon={<IoLogoGithub />}
                >
                  @hdheart
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
