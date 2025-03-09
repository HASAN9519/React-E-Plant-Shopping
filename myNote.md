###  this project is cloned from following github link 
git clone https://github.com/ibm-developer-skills-network/e-plantShopping.git


### original code instructions
https://author-ide.skills.network/render?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZF9pbnN0cnVjdGlvbnNfdXJsIjoiaHR0cHM6Ly9jZi1jb3Vyc2VzLWRhdGEuczMudXMuY2xvdWQtb2JqZWN0LXN0b3JhZ2UuYXBwZG9tYWluLmNsb3VkL1E5b1h5YzBiR0Y4VlVlN2J6OFl4TUEubWQiLCJ0b29sX3R5cGUiOiJ0aGVpYSIsImF0bGFzX2ZpbGVfaWQiOjQ2NTU5LCJhZG1pbiI6ZmFsc2UsImlhdCI6MTc0MDExOTMwNX0.ip3gQ6FEKHXjbjrvn2pxfCaEXnI-xDcmAXg3XFDw1RA


## install all the necessary packages to execute the application
npm install

## changed preview in package.json file to run in local machine
earlier>>>   "preview": "vite build; vite preview --host"
now>>>>      "preview": "vite build && vite preview --host"

### running the application, after every change need to run this command, recommended to use when app needs no change  
npm run preview

### command to run app when app is running on development, every changes automatically reflects on running app 
npm run dev

### linking project with my github
### first create github repo without readme file
git init

git config --global user.email "shehab10111995@gmail.com"

git config --global user.name "HASAN9519"

git add --a

git commit -m "initial commit"

git branch -M main

### linking project with created github repo 
git remote add origin https://github.com/HASAN9519/React-E-Plant-Shopping.git

git push -u origin main


### Deploy using GitHub Pages

#### To deploy your react application in GitHub you need to install gh-pages
npm install gh-pages --save-dev

#### Add given lines before "build": "vite build" in package.json file
"predeploy": "npm run build",
"deploy": "gh-pages -d dist",

#### in the vite.config.js file add this line before plugins: [react()]
base: "/REPOSITORY_NAME",

#### perform deploy command in the terminal to executes the "deploy" script defined in the package.json file, deploying the project to GitHub Pages using the gh-pages tool

npm run deploy