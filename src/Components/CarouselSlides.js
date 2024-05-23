import { Button } from "antd";
import "./Styles/CarouselSlides.css";
import { useState } from "react";

let totalScore = 0;

const CarouselSlides = (qn) => {
    const [finalScore, setFinalScore] = useState("Submit to see your final score...");
    let currentQnScore = 0
    let isSelected = false
    let isWrong = false

    const calculateScore = (e) => {
        if((e.target.value === qn.correct) && !isSelected){
            currentQnScore++;
            totalScore+=currentQnScore;
            console.log("Correct for 1st time: ",currentQnScore);
            isSelected = true;
            isWrong = false;
            
        }
        else if((e.target.value === qn.correct) && isSelected){
            console.log("Already marked as true: ",totalScore)
        }
        else if((e.target.value !== qn.correct) && !isSelected){
            console.log("Wrong and not selected: ", totalScore)
        }
        else if((e.target.value !== qn.correct) && !isWrong){
            totalScore--;
            console.log("Wrong",totalScore);
            isWrong = true;
            isSelected = false;
            currentQnScore = 0;
        }
        console.log("Total till now: ",totalScore);
    }
    const resetScore = () => {
        totalScore = 0;
        alert("Your score is reset to 0, Start over from question no. 1");
    }

    const showResult = () => {
        console.log("Total: ",totalScore);
        setFinalScore(`your score is : ${totalScore}`);
    }


    return(
        <div className="slides">
            {qn.qn_no !== "submit page" ? (
                <>
                    <div className="qnBar">{qn.qn}</div>
                    <div className="options">
                        <ul>
                            {qn.options.map((option, i) => (
                                <li key={i}>
                                    <input type="radio" name={qn.namee} value={option} onChange={calculateScore} /> {option}
                                </li>
                            ))}
                        </ul>
                        <Button className="submitBtnPrev" type="primary" onClick={resetScore}>Reset</Button>
                    </div>

                </>
            ) : (
                <>
                    <div className="qnBar">{qn.qn}</div>
                    <div className="finalResult">{finalScore}</div>
                    <div className="buttons">
                        <Button className="submitBtn" type="primary" onClick={showResult}>Submit</Button>
                        <Button className="submitBtn" type="primary" onClick={resetScore}>Reset</Button>
                    </div>
                </>
            )}
        </div>
    )
}

export default CarouselSlides;