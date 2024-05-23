import "./Styles/Pagination.css";
import { Button } from "antd";



const Pagination = ({Totalpages,updatePageNumber,activePage})=>{
    
    
    
        const incPage = () => {
            if(activePage<=5){
                updatePageNumber(activePage+1);
            }
        }
        const decPage = () => {
            if(activePage>=2){
                updatePageNumber(activePage-1);
            }
        }
    

        // document.addEventListener("keydown", (e) => handleKeyDown(e, incPage, decPage));


    return (
        <div id="pagination">
            <div>
                <Button className="paginationBtn material-icons" onClick={decPage}>chevron_left</Button>
                <span>{activePage}/{Totalpages}</span>
                <Button className="paginationBtn material-icons" onClick={incPage}>chevron_right</Button>
            </div>
        </div>
    )

    
}

// document.removeEventListener("keydown", (e) => handleKeyDown(e, incPage, decPage));
export default Pagination;