import components from '../components';
import directives from '../directives';
import mixins from '../mixins';

export = {
    install (Vue) {
        for (var componentName in components) {
            Vue.component(componentName, components[componentName]);
        }

        for (var directiveName in directives) {
            Vue.directive(directiveName, components[directiveName]);
        }
    },
    components,
    directives,
    mixins,
}
