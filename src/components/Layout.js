import styled from '@emotion/styled';

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  position: relative;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(to right,#111111,#111111);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  ${props => props.extraStyle}

  ${props => props.mobileStyle ? `
    @media screen and (max-width: 992px) {
      ${props.mobileStyle}
    }
  ` : ""}
`;

export const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  position: relative;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  height: auto;
  width: 1200px;
  margin-right: 100px;
  margin-left: 100px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  @media screen and (max-width: 992px) { 
    width: 750px;
    margin-right: 40px;
    margin-left: 40px;
  }
`;

export const Row = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  position: relative;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: auto;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  margin: 0 -15px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
`;

export const Col = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  position: relative;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  margin-left: 0%;
  margin-right: 0%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  ${props => props.extraStyle ? props.extraStyle : ""}

  ${props => props.mobileStyle ? `
    @media screen and (max-width: 992px) {
      ${props.mobileStyle}
    }
  ` : ""}
`;

export const Content = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  position: relative;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: stretch;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  min-height: 20px;
  min-width: 20px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  ${props => props.extraStyle ? props.extraStyle : ""}

  ${props => props.mobileStyle ? `
    @media screen and (max-width: 992px) {
      ${props.mobileStyle}
    }
  ` : ""}
`;

export const Heading = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 20px;
  min-width: 20px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: center;
  margin-top: 0px;
  margin-bottom: 30px;
  margin-left: -60px;
  margin-right: -60px;
  height: auto;
  width: 100%;
  outline: none;
  user-select: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  vertical-align: baseline;
`;