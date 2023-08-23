import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const Navbar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const cars = ["Saab", "Volvo"];
  return (
    <Layout
      style={{
        width: '100%'
      }}
      >
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(2).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${cars[index]}`
          }))}
        />
      </Header>
      {/* <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
          }}
        >
          Content
        </div>
      </Content> */}
      {/* <Footer
        style={{
          textAlign: 'center',
        }}
      >
      </Footer> */}
    </Layout>
  );
};
export default Navbar;