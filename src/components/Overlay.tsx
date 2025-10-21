import { Container, TopLeft, BottomLeft, BottomRight, Hamburger, Button } from '../layout/styles.ts';

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>
          GLTF to
          <br />
          React GLB —
        </h1>
        <p>Optimize your 3D models for the web —</p>
        <Button>Select GLTF File</Button>
      </TopLeft>
      <BottomLeft></BottomLeft>
      <BottomRight></BottomRight>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
    </Container>
  );
}