import styled from "@emotion/styled"


export const ModalBackground = styled.div`
position: fixed;
z-index: 100;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgba(0, 0, 1, 0.7);
display: flex;
`

export const ModalBody = styled.div`
margin: 25% auto;


.closeIcon {
  color: var(--mb1-3);
  font-size: 50px;
  cursor: pointer;
  margin-bottom: 40px;
}

h2 {
  margin-bottom: 20px;
}

h3 {
  margin-bottom: 10px;
}
`