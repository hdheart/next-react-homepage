import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Work = () => {
  return (
    <Layout>
      <Container>
        <Title>
            TODO 
            <Badge>2022</Badge>
        </Title>
        <P>
            A toto list app
        </P>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Website</Meta>
            <Link href="http://izapesu.cn" isExternal>
                http://izapesu.cn <ExternalLinkIcon/>
            </Link>
        </ListItem>
        <ListItem>
            <Meta>PLATFORM</Meta>
            <Link href="http://izapesu.cn" isExternal>
                http://izapesu.cn <ExternalLinkIcon/>
            </Link>
        </ListItem>
        </List>
        <WorkImage src="/images/works/inkdrop_01.png" alt="todo"></WorkImage>
        <WorkImage src="/images/works/inkdrop_02.png" alt="todo"></WorkImage>

      </Container>
    </Layout>
  );
};
export default Work;
