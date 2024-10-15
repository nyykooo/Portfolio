<template>
    <div class="project__container">
        <div class="text__area">
          <span style="font-size: 24px; color: white;">
            <strong>Philosophers</strong> is a project that simulates the philosophers' dinner problem, where they must eat, sleep and think, but for “x” number of philosophers there are the same “x” number of forks, and to eat each philosopher needs to hold 2 forks. Dinner only stops if a philosopher dies, or if everyone has eaten the number of times determined by the user. <br><br>
            So the project requires <strong>synchronization of activities</strong>, and to solve this problem I used <strong>threads</strong>, which execute activities in parallel in the code and to avoid data race conflicts and deadlocks I used <strong>mutexes</strong>. <br><br>
            In my solution, each philosopher is a thread and so I use a mutex to only start dinner after all the threads have been created, so the flows are synchronized correctly.
          </span>
        </div>
        <div class="social__media">
            <a href="https://github.com/nyykooo/42Philosophers" target="_blank" class="contacts__links">
                <img src="../../assets/image/icon/github.png" class="image_icons"/> Philosophers
            </a>
        </div>
    </div>
</template>
  
  <style scoped>
  .item {
    margin-top: 2rem;
    display: flex;
    position: relative;
  }
  
  .details {
    flex: 1;
    margin-left: 1rem;
  }
  
  i {
    display: flex;
    place-items: center;
    place-content: center;
    width: 32px;
    height: 32px;
  
    color: var(--color-text);
  }
  
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
  }
  
  @media (min-width: 1024px) {
    .item {
      margin-top: 0;
      padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
    }
  
    i {
      top: calc(50% - 25px);
      left: -26px;
      position: absolute;
      border: 1px solid var(--color-border);
      background: var(--color-background);
      border-radius: 8px;
      width: 50px;
      height: 50px;
    }
  
    .item:before {
      content: ' ';
      border-left: 1px solid var(--color-border);
      position: absolute;
      left: 0;
      bottom: calc(50% + 25px);
      height: calc(50% - 25px);
    }
  
    .item:after {
      content: ' ';
      border-left: 1px solid var(--color-border);
      position: absolute;
      left: 0;
      top: calc(50% + 25px);
      height: calc(50% - 25px);
    }
  
    .item:first-of-type:before {
      display: none;
    }
  
    .item:last-of-type:after {
      display: none;
    }
  }
  </style>
  