import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { createPage } from './notion/createPage';

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

exports.hello = async (
    event: APIGatewayProxyEvent,
    context,
): Promise<APIGatewayProxyResult> => {
    console.log('EVENT: \n' + JSON.stringify(event, null, 2));

    return context.logStreamName;
};
