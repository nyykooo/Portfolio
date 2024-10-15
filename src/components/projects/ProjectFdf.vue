<template>
    <div class="project__container">
        <div class="text__area">
          <span style="font-size: 24px; color: white;">
            FDF, or Fil de Fer (wireframe in french), is a graphic project that involves creating a simplified graphic representation of a relief landscape in 3D. The graphical elements that can be used are segments. Each segment represents a part of a “height map”. This height map is represented by a grid of points in a file. Each point in this grid is associated to a height. The graphical representation of the relief is obtained by joining the points of equal height by segments. This is how the 3D surface of the terrain can be approximated.
          </span>
        </div>
        <div class="social__media">
            <a href="https://github.com/nyykooo/fdf" target="_blank" class="contacts__links">
                <img src="../../assets/image/icon/github.png" class="image_icons"/> Fil de Fer
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
  