import Component from 'vue-class-component';

import docDefaultChip from './default';

@Component({
    components: {
        docDefaultChip
    },
    template: require('./chips.html')
})
export default class Chips {
    data() {
        return {
            api: require('../../components/chip/chip-api.json'),
            snippets: {
                chip: require('./default/default.snippet.html')
            },
            src: {
                script: require("!!html!highlightjs?lang=ts!../../components/chip/index.ts"),
                template: require('!!html!highlightjs?lang=html!../../components/chip/chip.html'),
                style: require('!!html!highlightjs?lang=scss!../../components/chip/chip.scss')
            }
        }
    }
}