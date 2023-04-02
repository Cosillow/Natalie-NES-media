#!/usr/bin/env bash


if [ $# -eq 0 ] || [ $# -eq 1 ] ;  then 
    echo "USAGE: $ <folderName> <fileName>"
    exit
elif [ $# -eq 2 ] ; then
    ## correct, continue running program
    
    folderName="$1"
    fileName="$2"

    photos=`ls $folderName`

    printf "[" > "$fileName"
    i=0
    for entry in ${photos}
    do
        if [ $i != 0 ]
        then
            printf , >> "$fileName"
            
        fi
        printf "\"$entry\"" >> "$fileName"
        ((i=i+1))
    done
    printf "]" >> "$fileName"


else
    echo "Invalid input"
    exit
fi

echo "index-photos.sh complete"
