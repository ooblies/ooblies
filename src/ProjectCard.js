import React from 'react';
import idlemmo from './project-thumbnails/idlemmo.png'
import defaultImage from './project-thumbnails/default.png'
import typeformer from './project-thumbnails/typeformer.png'
import typingincremental from './project-thumbnails/typingincremental.png'
import typerrpg from './project-thumbnails/typerrpg.png'
import bombdgeball from './project-thumbnails/bombdgeball.png'
import competativetyping from './project-thumbnails/competativetyping.png'
import ooblies from './project-thumbnails/ooblies.png'
import idleprospector from './project-thumbnails/idleprospector.png'

const { useState } = React;

function ProjectCard(props) {
    var activeStyle = "min-h-100 col-span-2 row-span-2";
    var inActiveStyle = " h-48 ";

    const [active, setActive] = useState(false);
    const toggleActive = function(value) {
        setActive(value => !value);
    }

    var borderStyle = " ";
    var statusTextStyle = "";

    switch(props.project.status) {
        case "In Progress":
            borderStyle += "border-green-600 ";
            statusTextStyle = "text-green-600";
            break;
        case "Completed":
            borderStyle += "border-gray-600 ";
            statusTextStyle = "text-gray-600";
            break;
        case "Cancelled":
            borderStyle += "border-red-600 ";
            statusTextStyle = "text-red-600";
            break;
        default:
            break;
    };

    //this is a hack but I can't get the dynamic images loading :(
    const img = props.project.title === "IdleMMO" ? idlemmo :
                props.project.title === "TypeFormer" ? typeformer :
                props.project.title === "Typing Incremental" ? typingincremental :
                props.project.title === "TypeRPG" ? typerrpg :
                props.project.title === "Competative Typing" ? competativetyping :
                props.project.title === "Bombdgeball" ? bombdgeball :
                props.project.title === "Ooblies.com" ? ooblies :
                props.project.title === "Idle Prospector" ? idleprospector :
                defaultImage

    return (
        <div className={"bg-gray-200 rounded-xl grid grid-cols-2 overflow-hidden cursor-pointer border-2 " + borderStyle + (active ? activeStyle : inActiveStyle) }>
            <img src={img} alt="Project Thumbnail" className="h-full w-full"  onClick={toggleActive}></img>
            <div className="flex flex-col">
                <div className="font-bold pl-8 pr-8 pt-4 text-xl" onClick={toggleActive}>
                    {props.project.title}
                </div>
                <div className="text-gray-600 flex-grow p-8 pt-4" onClick={toggleActive}>
                    {props.project.description}
                </div>
                <div className={"grid grid-flow-row p-8 text-gray-400 " + (active ? "" : " hidden")}>
                    <div>
                        {props.project.dateStarted} - {props.project.dateFinished}
                        <br/>
                        Status: <span className={statusTextStyle}>{props.project.status}</span>
                        <br/>
                        Stack: {props.project.stack}
                    </div>
                </div>
                <div className={"grid grid-flow-col text-center bg-gray-400" + (active ? "" : " hidden") + (props.project.sourceCode || props.project.playableLink ? "" : " hidden")}>
                    <div className={"bg-gray-300 hover:bg-gray-400" + (props.project.sourceCode ? "" : " hidden")}>
                        <a className="inline-block h-full w-full p-4" rel="noreferrer" target="_blank" href={props.project.sourceCode}>Source</a>
                    </div>
                    <div className={"bg-gray-300 hover:bg-gray-400" + (props.project.playableLink ? "" : " hidden")}>
                        <a className="inline-block h-full w-full p-4" rel="noreferrer" target="_blank" href={props.project.playableLink}>Play</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProjectCard