import { createPage } from '@/notion/createPage';

const main = async () => {
    console.log('main');
    const result = await createPage();

    return result;
};

main();
