from ast import Not
import os
import json
import boto3

def load_tables(dynamodb=None):
    if not dynamodb:
        client = boto3.client('dynamodb')
        dynamodb = boto3.resource('dynamodb')
        tables = client.list_tables()
        table = dynamodb.Table('rooney-dinner-bowl')
        #print(tables)
    return table, tables

def lambda_handler(event, context):
    json_region = os.environ['AWS_REGION']
    table, tables = load_tables(None)
    print(tables)
    profile_items = table.get_item(Key={
        'attrKey': {
          'S': 'profile'
        },
        'sortBy': {
          'S': 'v1_canine'
        }
    })
    print(profile_items)
    return {
        "statusCode": 200,
        "headers": {
             "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        "body": tables#json.dumps({
            #"Region": json_region
        #})
    }