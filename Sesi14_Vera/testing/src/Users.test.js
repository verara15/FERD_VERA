import { render, screen, waitFor} from '@testing-library/react';
import Users from './Pages/Users'

test('Render halaman Users dengan benar', async () => {
  render(<Users />);

  //mencari tombol tertentu
  //pastikan button kita memiliki role="button"
  const btn = screen.getByRole('button');
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent('Back to Home');

  //menunggu proses fetch user dari API
  //kita kasih waktu sebanyak 5 detik
  //kemudian mencari text sebuah nama dari API
  const user = await waitFor(()=>{
    return screen.findByText('Leanne Graham')}, {timeout: 5000})
  expect(user).toBeInTheDocument()
});

