import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    useEffect(() => {
        document.title = "Pandas"
    })

    return (
        <div className="Reader pushDown100 text-center">
            <div className="skew-down">
                <div className="inskew-down ">
                    <h1>Cheatsheet of <b>Pandas</b></h1>
                </div>
            </div>
            <Link className="btn-accent skyBackground btnnn" to="/Pandas/Data">Click here <i className="fa-solid fa-arrow-right-long"></i></Link>
        </div>
    );
}
