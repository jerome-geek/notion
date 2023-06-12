import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { createPage } from './createPage';

exports.handler = async (
    event: APIGatewayProxyEvent,
    context,
): Promise<APIGatewayProxyResult> => {
    const result = await createPage();
    console.log('🚀 ~ file: index.ts:9 ~ result:', result);

    return {
        statusCode: 200,
        body: JSON.stringify(result),
    };
};
