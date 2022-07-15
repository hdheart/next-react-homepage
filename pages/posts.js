import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";

import thumbnail from "../public/images/contents/blog-500-paid-users.jpg";

const Posts = () => (
  <Layout>
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.2}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            tittle="my article"
            thumbnail={thumbnail}
            href="http://izapesu.cn"
          ></GridItem>
          <GridItem
            tittle="my 2020"
            thumbnail={thumbnail}
            href="http://izapesu.cn"
          ></GridItem>
          <GridItem
            tittle="my 2022"
            thumbnail={thumbnail}
            href="http://izapesu.cn"
          ></GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);
export default Posts;
