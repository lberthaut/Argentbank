import { createGlobalStyle } from "styled-components";


/* Footer component's CSS*/
const Footerstyle = createGlobalStyle`
@media (min-width: 920px) {
    .footer {
  display: flex;
  justify-content: center;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;
}

.footer-text {
  margin: 0;
  padding: 0;
}
}
`

export default Footerstyle;