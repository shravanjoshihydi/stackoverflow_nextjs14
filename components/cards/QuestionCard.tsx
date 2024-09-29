import Link from "next/link";
import React from "react";
import RenderTag from "../shared/RenderTag";
import Metric from "../shared/Metric";
import { formatNumber, getTimeStamp } from "@/lib/utils";
interface QuestionCardTypes {
  question: {
    _id: string;
    title: string;
    tags: { _id: string; name: string }[];
    author: {
      _id: string;
      name: string;
      picture: string;
    };
    upvotes: number;
    views: number;
    answers: Array<object>;
    createdAt: Date;
  };
}

const QuestionCard = ({ question }: QuestionCardTypes) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex justify-between items-center mb-5">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimeStamp(question.createdAt)}
          </span>
          <Link href={`/questions/${question._id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {question.title}
            </h3>
          </Link>
        </div>
        {/* if signed in add edit delete actions */}
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {question.tags.map((tag) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl="/assets/icons/avatar.svg"
          alt="user"
          value={question.author.name}
          title={` - asked ${getTimeStamp(question.createdAt)}`}
          href={`/profile/${question.author._id}`}
          isAuthor
          textStyles="body-medium text-dark400_light700"
        />

        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="Upvotes"
          value={formatNumber(question.upvotes)}
          title=" Votes"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={formatNumber(question.answers.length)}
          title=" Answers"
          textStyles="small-medium text-dark400_light800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="Views"
          value={formatNumber(question.views)}
          title=" Views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
    </div>
  );
};

export default QuestionCard;
