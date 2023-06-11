import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

exports.handler = async (
    event: APIGatewayProxyEvent,
    context
): Promise<APIGatewayProxyResult> => {
    console.log('EVENT: \n' + JSON.stringify(event, null, 2));
    // return context.logStreamName;
    return {
        statusCode: 200,
        body: 'notion test',
    };
};
