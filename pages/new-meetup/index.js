import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetUpPage = () => {
  const addMeetUpHandler = async (enteredData) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>New meetup</title>
        <meta name="description" content="Add a new meetup!" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </>
  );
};
export default NewMeetUpPage;
