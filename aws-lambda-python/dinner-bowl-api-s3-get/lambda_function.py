from ast import Not
import os
import json
import boto3
import csv

def load_s3(s3=None):
    if not s3:
        client = boto3.client('s3',region_name='us-east-1')
        obj = client.get_object(Bucket='rooney-dinnerl-bowl', Key='aafco.csv') #2
        data = obj['Body'].read().decode('utf-8').splitlines() #3
        records = csv.reader(data) #4
        headers = next(records) #5
        res = None
        print('headers: %s' % (headers)) 
        for eachRecord in records: #6
            #res.update({'':eachRecord.})
            print(eachRecord)


def lambda_handler(event, context):
    json_region = os.environ['AWS_REGION']
    load_s3()

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": 'local_test'#json.dumps({
            #"Region": json_region
        #})
    }