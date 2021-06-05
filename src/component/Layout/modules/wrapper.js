import styled from 'styled-components';
import { Layout } from 'antd';

export const LayoutWrapper = styled(Layout)`
  height: 100vh;
  .scroll-content {
    height: 100px;
    flex-grow: 1;
    flex-shrink: 0;
    overflow-y: scroll;
  }
`;

export const HeaderWrapper = styled.div`
  line-height: 54px !important;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 4px 0 #0015291f;
  padding-left: 24px;
  padding-right: 24px;
  z-index: 999;

  .toggle-customer {
    color: #007ddc;
    cursor: pointer;
  }
  .ant-dropdown-link {
    color: #333;
  }
  .color-picker {
    display: inline-block;
    height: 10px;
    width: 30px;
    cursor: pointer;
    padding-right: 10px;
    padding-left: 10px;
  }
  .header-right {
    display: flex;
    align-items: center;
  }
`;

export const LogoWrapper = styled.div`
  font-size: 36px;
  color: #eee;
  text-align: center;
  padding: 10px;
`;

export default { LayoutWrapper, HeaderWrapper, LogoWrapper };