import { Client } from '@notionhq/client';
import randomEmoji from '@0xadada/random-emoji';

import { getDate } from '../utils';

// (1) 환경 변수로 API 키를 참조합니다.
const NOTION_API_KEY = process.env.NOTION_API_KEY;
console.log("🚀 ~ NOTION_API_KEY:", NOTION_API_KEY)
const NOTION_DATABASE_DAILY_LOG_ID = process.env.NOTION_DATABASE_DAILY_LOG_ID;
console.log("🚀 ~ NOTION_DATABASE_DAILY_LOG_ID:", NOTION_DATABASE_DAILY_LOG_ID)

// (2) SDK 클라이언트의 인스턴스를 초기화합니다.
const notion = new Client({ auth: NOTION_API_KEY });

async function createPage() {
    try {
        const response = await notion.pages.create({
            icon: {
                emoji: randomEmoji('food'),
                type: 'emoji',
            },
            parent: {
                type: 'database_id',
                database_id: NOTION_DATABASE_DAILY_LOG_ID,
            },
            properties: {
                title: {
                    title: [
                        {
                            text: {
                                content: getDate(),
                            },
                        },
                    ],
                },
            },
        });

        if (response) {
            console.log('Success! Entry added.');
            return response;
        } else {
            throw new Error();
        }
    } catch (error) {
        console.error(error.body);
    }
}

export { createPage };
