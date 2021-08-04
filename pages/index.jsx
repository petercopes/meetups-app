import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetUpList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Meetups Home Page</title>
        <meta name="description" content="A site for react meetups" />
      </Head>
      <MeetUpList meetups={props.meetups} />
    </>
  );
};
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://pedrocopes:Pedro_310596@cluster0.zkpzu.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
