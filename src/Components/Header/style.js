import styled from 'styled-components';
import Toolbar from '@material-ui/core/Toolbar'

export const StyledToolbar = styled(Toolbar)`
    @media(max-width: 800px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    position: relative;
    background-color: #212222;
  }  .button {
    text-transform: uppercase;
    font-weight: bold;
    width: 240px;
    background: #100f12;
    border-width: initial;
    border-style: none;
    border-radius: 5px;
    cursor: pointer;
    height: 54px;
    transition: background 0.2s;
    font-size: 16px;
    color: white;
    &:hover {
      background: #795a8b;
    }
  }
  @media(max-width: 800px) {
    button {
     margin-left: 0px;
     background: #484b4a;
     border-radius: 50px;
    }
  }
`

export const ImageLogo = styled.img`
  width: 100px;
`
