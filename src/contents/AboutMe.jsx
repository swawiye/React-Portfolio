//Embedding expressions
const identity = "Sovereign Wawiye";
const Question = () => {
    return <h4>Who am I? I am {identity}</h4>
}
export default Question; //only returns one default function in a single file

export const QuestionContent = () => {
    return <p>
        This simple sentence with three words is one which we have all encountered at least once in our lives.
        Whether it was a question someone else prompted you to answer, or a question that arose from your curiosuty 
        and you had to answer it yourself. This seemingly simple question calls for deep self-reflection. For a long 
        time, I found this question disturbing since unlike others, I did not have a concrete answer. I was who I was,
        and I am who I am- that's what I thought the answer was for me. However, it is not. This question cannot be 
        answered in a singular statement, it has many layers and dimensions to it. One of the dimensions happen to be 
        one's skills and interests.
    </p>
}

export const Interests = () => {
    return <h5>
        Some of my interests include: Colouring, Painting, Cooking, Reading, Research, Videography, Graphic design & Hairdressing
    </h5>
}