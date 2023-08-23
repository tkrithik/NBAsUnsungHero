import { SoundOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { spotify, onamp } from './imports';
import { FloatButton } from 'antd';
const FloatButtons = () => (
  <>
    <FloatButton.Group
      shape="circle"
      style={{
        right: 24,
      }}
    >
      <FloatButton icon={<SoundOutlined />} href="https://www.google.com" target="_blank"/>
      <FloatButton icon={<PlayCircleOutlined/>} />
      {/* <FloatButton.BackTop visibilityHeight={0} /> */}
    </FloatButton.Group>
  </>
);
export default FloatButtons;