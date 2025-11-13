import { Link } from "@tanstack/react-router";

export default function Button() {

    return(
        <div className="w-screen flex justify-center gap-y-[<12px>]">
            <button className="w-[150px] bg-orange-200 rounded-lg"><Link to="/movies">Catalogue de films</Link></button>
            <button className="w-[150px] bg-orange-200 rounded-lg"><Link to="/favorites">Favoris</Link></button>
        </div>
    )
}