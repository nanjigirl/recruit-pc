import React from 'react';
import { Layout as AntdLayout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import {LayoutWrapper, LogoWrapper} from './modules/wrapper'
const { Header, Content, Footer, Sider } = AntdLayout;

function Layout() {

  return (
    <LayoutWrapper>
      <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <LogoWrapper>123</LogoWrapper>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          nav 4
        </Menu.Item>
      </Menu>
    </Sider>
      <AntdLayout>
        {/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            content
          </div>
        </Content>
      </AntdLayout>
    </LayoutWrapper>
  );
}

export default Layout;