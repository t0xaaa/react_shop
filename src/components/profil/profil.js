import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Profil() {

    return <div>
    <div className='MainDiv'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ваш email</Form.Label>
        <Form.Control type="email" placeholder="Введите email" />
        <Form.Text className="text-muted">
          Не сообщайте никому свою почту и пароль
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" placeholder="Пароль" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Запомнить меня" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Войти
      </Button>
    </Form>
    </div>
    </div>
  }

export default Profil