import Component from 'vue-class-component';

var Vue: any = Vue || require('vue');

@Component({
    props: {
        img: {
            type: String,
            required: false,
            'default': null
        },
        align: {
            type: String,
            required: false,
            "default": ''
        }
    },
    events: {
        'slider::activate': function (index) {
            this.setActive(index);
        }
    },
    watch: {
        active: function(val) {
            this._setClasses(val);
        }
    },
    template: require('./slide.html')
})
export default class Slide {
    private $els: any;
    private $parent: any;

    private img: string;
    private position: number;
    private active: boolean;
    private classes: any;

    compiled() {
        // todo: remove hack webpack img src loading
        this.$els.img.setAttribute('src', this.img);
    }

    ready () {
        this._setClasses(this.active);
    }

    data() {
        var position = this.$parent.$children.indexOf(this);
        return {
            active: false,
            position: position,
            classes: {}
        }
    }
    
    get src() {
        return this.img;
    }

    get computedClasses() {
        return this.classes;
    }

    setActive(index) {
        this.active = this.position == index;
    }

    _setClasses (val) {
        Vue.set(this.classes, 'active', val);
        Vue.set(this.classes, 'fadeIn', val);
        Vue.set(this.classes, 'fadeOut', !val);
    }

}