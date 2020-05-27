#!/bin/bash

npm run build
cd build; ../deploy.py
