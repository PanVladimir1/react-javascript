export const Review = ({ review }) => {
    return <div>
        <div>{review.user}</div>
        <div>{review.text}</div>
    </div>
};