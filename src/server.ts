import { createApp } from './app';

const PORT = process.env.PORT || 3000;

createApp().then(app => {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}).catch(err => {
  console.error('Failed to start app', err);
});
