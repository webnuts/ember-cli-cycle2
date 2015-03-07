# ember-cli-cycle2

Plugin for ember-cli that makes cycle2 slideshow component available.

## Installation

To install simply run:

```
npm install git+ssh://git@github.com:webnuts/ember-cli-cycle2.git --save-dev
ember g ember-cli-cycle2
```

## Usage

Once installed, you can use the plugin right away inside your template files:

```
{{#cycle-slideshow class="slideshow type-frontpage" fx="carousel" timeout="5000" slides=".slide" carouselVisible="1" pager=".cycle-pager" carouselFluid=true swipe=true}}
  {{#each model.slideshowItems as |slideshowItem|}}
    <div class="slide">
      <img src="{{slideshowItem.imageUrl}}">
      <div class="overlay">
        <div class="text-container">
          <span class="title">{{slideshowItem.title}}</span>
          <span>{{slideshowItem.description}}</span>
        </div>
      </div>
    </div>
  {{/each}}
  <div class="cycle-prev"></div>
  <div class="cycle-next"></div>
  <div class="pager-container"><div class="cycle-pager"></div></div>
{{/cycle-slideshow}}
```

## Configuration

The plugin currently supports the following attributes:

* timeout
* fx
* prev
* next
* slides
* carouselVisible
* carouselFluid
* pager
* log
* swipe
* pauseOnHover
* autoHeight
* paused

You can find the documentation for Cycle2 here: http://jquery.malsup.com/cycle2/api/