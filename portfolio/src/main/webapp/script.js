// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


function randomProject() {
  const projects = [
    'https://github.com/roberthuskins/chess_position_finder',
    'https://github.com/roberthuskins/teambot.py',
    'https://github.com/roberthuskins/pokepastebin'
  ];

  const project = projects[Math.floor(Math.random() * projects.length)];
  window.open(project, '_blank');
}

function getComment() {
fetch('/data')  // sends a request to /my-data-url
.then(response => response.json()) // parses the response as JSON
.then((myObject) => { // now we can reference the fields in myObject!
  console.log(myObject[Math.floor(Math.random() * myObject.length)])
})
};