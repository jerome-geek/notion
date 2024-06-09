import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone.js';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

const blank = (count) => {
    return Array(count).fill({
        object: 'block',
        paragraph: {
            rich_text: [{ text: { content: '' } }],
        },
    });
};

const getDate = (isISOString = false) => {
    const now = dayjs().tz('Asia/Seoul');

    return isISOString
        ? now.utc(true).toISOString()
        : now.format('YYYY.MM.DD (ddd)');
};

export { blank, getDate };
