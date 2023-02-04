// import AppHeading from "../../components/AppHeading/AppHeading";
import AppHeading from "../../components/AppHeading/AppHeading";

const About = () => {
  return (
    <>
      <AppHeading textColor="black" bgrColor="wheat">
        App
      </AppHeading>
      <h1>ABOUT</h1>
      <p
        style={{
          width: "80%",
          maxWidth: "1080px",
          fontSize: "26px",
          lineHeight: "40px",
          margin: "50px auto",
        }}
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
    </>
  );
};

export default About;
