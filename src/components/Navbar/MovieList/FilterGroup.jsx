import PropTypes from "prop-types"

const FilterGroup = ({ minRating, onRatingClick, ratings }) => {
    return (
        <ul className='align_center movie_filter'>
            {ratings.map((rate) => (
                <li
                    className={
                        minRating === rate
                            ? "movie_filter_item active"
                            : "movie_filter_item"
                    }
                    key={rate}
                    onClick={() => onRatingClick(rate)}>
                    {rate}+ Star
                </li>
            ))}
        </ul>
    );
};

FilterGroup.propTypes = {
    minRating: PropTypes.number.isRequired,
    onRatingClick: PropTypes.func.isRequired,
    ratings: PropTypes.arrayOf(PropTypes.number).isRequired
  };

export default FilterGroup