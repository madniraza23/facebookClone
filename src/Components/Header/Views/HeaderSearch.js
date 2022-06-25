import SearchIcon from "../../../Assets/Images/SVG/search-icon";

export default function HeaderSearch() {
    return (
        <>
            <span className="search-icon">
                <input
                    className="search-input"
                    placeholder="Search Facebook"
                />
                <div className="fb-logo">
                    <SearchIcon />
                </div>
            </span>
        </>
    )
}