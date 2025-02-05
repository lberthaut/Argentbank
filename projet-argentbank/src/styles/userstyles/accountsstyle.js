import { createGlobalStyle } from "styled-components";

/* Account component's CSS*/
const Accountsstyle = createGlobalStyle`
.bg-dark {
  padding-top: 0.1%;
  padding-bottom: 0.1%;
}

    .transaction-button {
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
  }

  .account {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    padding: 1.5rem;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 2rem;
  }

@media (min-width: 920px) {
  

  
  
  .account-amount {
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
  }
  
  .account-amount-description {
    margin: 0;
  }
  
  .account-title {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
  }
  
  .account-content-wrapper {
    width: 100%;
    flex: 1;
  }

  .transaction-button {
      width: 200px;
    }

    .account {
      flex-direction: row;
    }
  
    .account-content-wrapper.cta {
      flex: 0;
    }
}
  
  @media (max-width: 919px) {
    .account {
      flex-direction: row;
    }
  
    .account-content-wrapper.cta {
      flex: 0;
    }
  
    .transaction-button {
      width: 200px;
    }


  }

  
  
`

export default Accountsstyle;