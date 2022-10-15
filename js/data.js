import { getRandomInRange } from './util.js';

const COUNTS_ELEMENTS = 25;

const RANDOM_COMMENTS = [
  'Это мы с друзьями отдыхаем',
  'Неплохая получилась история',
  'Всегда начинайте свой день с хороших людей и кофе.',
  'Если у вас есть глаза, взгляните на меня сейчас!',
  'Жизнь слишком коротка, чтобы тратить время на то, чтобы найти все ответы. Вместо этого, наслаждайтесь всеми вопросами!',
  'Улыбка — это свет, который светит через окно вашей души.',
  'Самое крутое доказательство того, что я умею делать фотки, лучше чем вы.',
  'Котики, ну куда же без них?',
];

const createPost = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: RANDOM_COMMENTS[Math.floor(Math.random() * RANDOM_COMMENTS.length)],
  likes: getRandomInRange(15, 200),
  comments: getRandomInRange(0, 200),
});

createPost();

const createArrayOfPosts = () => {
  const posts = Array.from({ length: COUNTS_ELEMENTS }, (_, index) =>
  createPost(index + 1)
  );
  return posts;
};

export { createArrayOfPosts };
