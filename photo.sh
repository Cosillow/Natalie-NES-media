#!/usr/bin/env bash

photos=`ls ./resources/img/photography`
echo "["
i=0
for entry in ${photos}
do
    if [ $i != 0 ]
    then
        echo ,
        
    fi
    echo "\"$entry\""
    ((i=i+1))
done
echo "]"
