Gridjs, NKO 2011
==============

Gridjs – is a free browser based computational grid, that allows to run distributed computations using MapReduce framework


Prerequisites
--------
node (>= 0.4.10) and npm

Setup
-------
1.clone with git, cd folder, run npm install, then node ./app.js
2.to deploy on linode edit deploy.conf and then run 'deploy linode setup; deploy linode' 

Tested on
---------
Ubuntu, Debian and Mac OSX



Some usage instructions
----------

1. 
Each click on “join grid” will open a new browser tab, which will be executing a code making the browser a computation slot for the grid. Anyone can open any amount of browsers and tabs to make the grid faster.

2. 
In order to submit a computation to the grid click “submit job”. This page will allow the following: upload comma separated data file, then add a javascript map and reduce functions (aka computation), and finally to submit a computation to the grid.

3. 
If a job submission was successful, it’s progress will be displayed on “jobs status” page, allowing to stop/(re)start/view the job status and results.

