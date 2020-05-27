#!/bin/bash

aws s3 cp $1 s3://cdac-misc/images/ --profile cdac-misc
aws s3api put-object-acl --acl public-read  --bucket cdac-misc --key images/$1 --profile cdac-misc
#aws s3api put-bucket-cors --bucket cdac-misc --profile cdac-misc --cors-configuration '{"CORSRules": [{"AllowedOrigins": ["*"], "AllowedMethods":["GET"]}]}'
