<template>
    <div class="project__container">
        <div class="text__area">
          <span style="font-size: 21px; color: white;">
            <strong>Minishell</strong> is a project that, as the name implies, should replicate the shell, but with a certain limitation. We have to code some <strong>builtins</strong>, such as pwd, cd, echo, export, unset, env and exit. These builtins shouldn't replicate 100% of the way they work in the shell. All other commands are fetched from the system root folders (cat, ls, grep, ...). <br><br>
            In this project I learned a lot about <strong>parsing, tokenization, processes, signals, file descriptors and shell</strong> ! In addition to the builtins, we had to implement <strong>pipes</strong> and <strong>redirections</strong> in the program, i.e. handle process executions and input and output fds. <br><br>
            It was an incredible experience to carry out this project and I would like to thank my partner <strong>Bruno Henrique Lopes</strong> for all his support and cooperation during the creation of the program.
          </span>
        </div>
        <div class="social__media">
            <a href="https://www.linkedin.com/in/brunohenriquelopes/" target="_blank" class="contacts__links">
                <img src="../../assets/image/icon/linkedin.png" class="image_icons"/> Bruno Henrique Lopes
            </a>
        </div>
        <div class="social__media">
            <a href="https://github.com/nyykooo/Minishell" target="_blank" class="contacts__links">
                <img src="../../assets/image/icon/github.png" class="image_icons"/> Minishell
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
  