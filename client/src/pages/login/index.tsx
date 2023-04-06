import { FunctionComponent, useState } from "react";
import { Form, Input, Row, Col, Button, Space } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import http from '../../requset/index'
interface IndexProps {

}
enum CurrentMode {
  '登录',
  '注册',
  '修改密码',
}
const Index: FunctionComponent<IndexProps> = () => {
  const [mode, setMode] = useState(0);
  const [form] = Form.useForm()
  function onFinish (values: any) {
    console.log(values);
    http.get('/users').then(res => {
      console.log(11111, res);

    })
  }

  function handleMode (e: any, idx: number) {
    e.preventDefault()
    setMode(idx)
    form.resetFields()
  }
  return (
    <Row justify={'center'}>
      <Col style={{
        width: '480px',
        marginTop: '150px',
        padding: '32px',
        boxSizing: 'border-box'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>{CurrentMode[mode]}</h1>
        <Form
          form={form}
          name="username"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入账号!' }]}
          >
            <Input size='large' prefix={<UserOutlined />} placeholder="账号" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password
              size='large'
              prefix={<LockOutlined />}
              type="password"
              placeholder="密码"
              autoComplete={'current-password'}
            />
          </Form.Item>
          <Row justify={'space-between'} style={{ margin: '16px 0' }}>
            {mode === 0 ?
              <>
                <Col>
                  <a href="" onClick={(e) => handleMode(e, 2)}>
                    忘记密码
                  </a>
                </Col>
                <Col>
                  <a href="" onClick={(e) => handleMode(e, 1)}>
                    注册
                  </a>
                </Col>
              </>
              :
              <Col>
                <a href="" onClick={(e) => handleMode(e, 0)}>
                  返回登录
                </a>
              </Col>
            }
          </Row>

          <Form.Item>
            <Button type="primary" htmlType="submit" block >
              {CurrentMode[mode]}
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row >

  );
}

export default Index;