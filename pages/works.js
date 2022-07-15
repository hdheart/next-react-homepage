import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-item";
import thumbnail_todoApp from "../public/images/works/inkdrop_02.png";

const Works = () => {
  return (
    <Layout title='works'>
      <Container>
        <Heading>Works</Heading>
        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              id="todo"
              tittle="todo-list"
              thumbnail={thumbnail_todoApp}
            >
              A todo-list app
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};
export default Works;
