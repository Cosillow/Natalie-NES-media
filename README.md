# Natalie-NES-media

## how to index photos
*Everything must be a .jpg labeled as such*

### setup for first time:
MAC      --> install homebrew (https://brew.sh/) and then $ brew install jpegoptim
Ubuntu   --> $ sudo apt-get jpgoptim    


### after set up
run this file in your terminal in the root directory with the aimed-for file size 1Mb is around the sweet spot, but maybe go lower
    $ ./new-photos.sh 1000
**Make sure you take a look in live server that the quality was acceptable (if not, lower the number in the command above^^)**

### issues
if you run into a permissions issue, run this first:
    $ chmod +x ./*.sh
