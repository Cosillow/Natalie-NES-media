#!/usr/bin/env bash


if [ $# -eq 1 ] ;  then 
    # acceptable command line arguments

    fileSize="$1"
    reduceImages_SCRIPT="jpegoptim --size ${fileSize} -d ./resources/img/photography/optimized/  ./resources/img/photography/*.jpg"
    indexPhotos_SCRIPT="./index-photos.sh ./resources/img/photography/optimized ./resources/js/imgLocations.json"

    rm ./resources/img/photography/optimized/*


    echo "`$reduceImages_SCRIPT`"
    echo ""
    echo "****************************************************"
    echo ""
    echo "`$indexPhotos_SCRIPT`"
    ## SUCCESS
else
    # EXIT FAIL
    echo "Invalid input"
    echo "USAGE: $ <fileSize(Mb)>"
    exit
fi

echo "new-photos.sh complete"
