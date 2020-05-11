import styled from "styled-components"


const InnerRecs = styled.div`
display: flex;
position: relative;
flex-direction: row;
margin-left: ${props => props.offset}px;
`;

export default InnerRecs;
