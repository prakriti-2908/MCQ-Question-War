import CarouselSlides from "./CarouselSlides";
import "./Styles/Carousel.css";
import Pagination from "./Pagination";
import { useState } from "react";

const questions = [
    {
        qn: "Who is PM of India?",
        options: ["Narendra Modi", "Rahul Gandhi", "Aravind Kejriwal", "Carry Minati"],
        namee: "PM",
        qn_no: "1",
        correct: "Narendra Modi"
    },
    {
        qn: "What is full form of JS?",
        options: ["Jagjeet Singh", "Jaipur Sarkar", "JavaScript", "Jealous Secretary"],
        namee: "JS",
        qn_no: "2",
        correct: "JavaScript"
    },
    {
        qn: "Who developed ReactJS ?",
        options: ["Narendra Modi", "Pakistanis", "ISIS", "Facebook Developers"],
        namee: "reactjs",
        qn_no: "3",
        correct: "Facebook Developers"
    },
    {
        qn: "Who has written the play - Romeo and Juliet ?",
        options: ["Sanjay Leela Bhansali", "Shahrukh Khan", "Narendra Modi", "William Shakespeare"],
        namee: "romeo",
        qn_no: "4",
        correct: "William Shakespeare"
    },
    {
        qn: "Who is best for the role you are offering ?",
        options: ["Narendra Modi", "Any other Developer", "Albert Einstien", "Prakriti Jha"],
        namee: "jobRole",
        qn_no: "5",
        correct: "Prakriti Jha"
    },
    {
        qn: "Ready to submit your response ?",
        qn_no: "submit page"
    }
]

function Carousel(){
  const [pageNumber, setPageNumber] = useState(1);
  const [result,setResult] = useState(0);


    return(
        <div id="Carousel">
            
            <div id="eachSlide">
                {/* {questions.map((qn,index)=>(
                    <CarouselSlides key={index} {...qn}/>
                ))} */}
                {
                    <CarouselSlides key={pageNumber} {...questions[pageNumber-1]} res={result} updateResult={setResult} />
                }
            <div id="pagination">
      <Pagination Totalpages={6} updatePageNumber={setPageNumber} activePage = {pageNumber}/>

            </div>
            </div>
        </div>
    )
}

export default Carousel;