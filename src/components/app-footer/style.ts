import styled from 'styled-components'

export const AppFooterWrapper = styled.div`
  height: 325px;
  background-color: #f2f2f2;
  color: #666;
  border-top: 1px solid #d3d3d3;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const FooterTop = styled.ul`
  width: 100%;
  margin-top: 33px;
  display: flex;
  justify-content: space-around;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;

    .link {
      display: block;
      width: 50px;
      height: 45px;
      background-size: 220px 220px;
    }
    :nth-child(1) .link {
      background-position: -170px -5px;
      &:hover {
        background-position: -5px -115px;
      }
    }
    :nth-child(2) .link {
      background-position: -5px -170px;
      &:hover {
        background-position: -60px -170px;
      }
    }
    :nth-child(3) .link {
      background-position: -5px -60px;
      &:hover {
        background-position: -60px -5px;
      }
    }
    :nth-child(4) .link {
      background-position: -60px -60px;
      &:hover {
        background-position: -115px -5px;
      }
    }
    :nth-child(5) .link {
      background-position: -115px -115px;
      &:hover {
        background-position: -5px -5px;
      }
    }
    :nth-child(6) .link {
      background-position: -170px -115px;
      &:hover {
        background-position: -60px -115px;
      }
    }

    .title {
      margin-top: 5px;
      display: block;
    }
  }
`

export const FooterBottom = styled.div`
  padding-top: 60px;
  line-height: 24px;

  .link {
    a {
      color: #999;
    }

    .line {
      margin: 0 10px;
      color: #999;
    }
  }

  .copyright {
    span {
      margin-right: 15px;
    }
  }
`
