const lodUser = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayUniverse(data.data.tools))
}

const displayUniverse = universes =>{
    // console.log(universe);
    const seeMore = document.getElementById('See-More');
    if(universes.length > 6){
        universes = universes.slice(0, 6);
        seeMore.classList.remove('d-none');
    }
    else{
        seeMore.classList.add('d-none')
    }
    const universeContainer = document.getElementById('universe-container'); 
    universes.forEach(universe => {
        console.log(universe);
        const universeDiv = document.createElement('div');
        universeDiv.classList.add('col');
        universeDiv.innerHTML = `
        <div class="card h-100">
          <img src="${universe.image}" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="">Features</h5>
               <p class="mt-4">${universe.features[0]}</p>
               <p class="">${universe.features[1]}</p>
               <p class="">${universe.features[2]}</p>
            </div>
            <div class="card-footer d-flex justify-content-between">
              <div>
              <p class="">${universe.name}</p>
              <p class="">${universe.published_in}</p>
              </div>
              <div class="pt-4">
              <button id="Universe-detail">
              <i class="fa-solid fa-arrow-right"></i>
              </button>
              </div>
            </div>
        </div>
        `;
        universeContainer.appendChild(universeDiv);
        document.getElementById('Universe-detail').addEventListener('click', function(){
            console.log('hello')
        })
    });
}

document.getElementById('btn-See-More').addEventListener('click', function(){
    toggleSpinner(true);

})



lodUser();