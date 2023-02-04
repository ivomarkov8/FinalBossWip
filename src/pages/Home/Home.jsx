import AppHeading from "../../components/AppHeading/AppHeading";

const Home = () => {
  return (
    <>
      <AppHeading textColor="black" bgrColor="wheat">
        App
      </AppHeading>
      <h1>HOME</h1>
      <p
        style={{
          width: "80%",
          maxWidth: "1080px",
          fontSize: "26px",
          lineHeight: "40px",
          margin: "50px auto",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </>
  );
};

export default Home;
