import { supabase } from "@/util/supabase";

const LessonDetails = ({ lesson }) => {
  console.log({ lesson });

  return (
    <div className="flex min-h-screen flex-col items-center space-y-4 p-24 font-mono bg-white text-black">
      <h1 className="text-2xl font-bold mb-6">{lesson.title}</h1>
      <p className="text-lg">{lesson.description}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  const { data: lessons } = await supabase.from("lesson").select("id");

  const paths = lessons.map(({ id }) => ({
    params: {
      id: id.toString()
    },
  }));

  return {
    paths,
    fallback: false,
  }

};

export const getStaticProps = async ({ params: { id } }) => {
  const { data: lesson } = await supabase
    .from("lesson")
    .select("*")
    .eq("id", id)
    .single();

  return {
    props: {
      lesson,
    },
  };
};

export default LessonDetails;
