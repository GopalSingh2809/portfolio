import "./WorkCardStyles.css";
import React from 'react';
import WorkCard from "./WordCard";
import WorkCardData from "./WorkCardData";
const Word = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((value,index)=>{
                return(
                    <WorkCard 
                        key={index}
                        imgsrc={value.imgsrc}
                        title={value.title}
                        text={value.text}
                        view={value.view}
                    />
                );
            })}
        </div>
    </div>
  )
}

export default Word;
