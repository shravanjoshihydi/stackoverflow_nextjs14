import LocalSearchBar from "@/components/shared/localsearchbar/LocalSearchBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Filters from "@/components/shared/filters/Filters";
import { HomePageFilters } from "@/constants/filters";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";
const questions = [
  {
    _id: "1",
    title: "Random Question I want to ask?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    upvotes: 10,
    views: 100,
    answers: [{}],
    createdAt: new Date("2024-09-28T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to center a div?",
    tags: [{ _id: "3", name: "css" }],
    author: {
      _id: "2",
      name: "S H Joshi",
      picture: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    upvotes: 1098989,
    views: 9992923,
    answers: [{}],
    createdAt: new Date("2024-08-21T12:00:00.000Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filters
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {/* Loop through questions */}
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard key={question._id} question={question} />
          ))
        ) : (
          <NoResult
            title="There are no questions to show"
            description="Be the first to break the silence. Ask a question right now."
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </div>
    </>
  );
}
