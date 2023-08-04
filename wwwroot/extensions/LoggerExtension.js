/// import * as Autodesk from "@types/forge-viewer";

import { BaseExtension } from './BaseExtension.js';

class LoggerExtension extends BaseExtension {
    load() {
        super.load();
        console.log('LoggerExtension loaded.');
        return true;
    }

    unload() {
        super.unload();
        console.log('LoggerExtension unloaded.');
        return true;
    }

    async onModelLoaded(model) {
        super.onModelLoaded(model);
        const props = await this.findPropertyNames(this.viewer.model);
        console.log('New model has been loaded. Its objects contain the following properties:', props);
    }

    async onSelectionChanged(model, dbids) {
        super.onSelectionChanged(model, dbids);
        console.log('Selection has changed', dbids);
    }

    onIsolationChanged(model, dbids) {
        super.onIsolationChanged(model, dbids);
        console.log('Isolation has changed', dbids.values);
        if(dbids[0] == 1846){
            var link = document.createElement('a');
            link.href = 'http://localhost:8080/1846.pdf';
            link.download = './1846.pdf';
            // link.dispatchEvent(new MouseEvent('click'));
            modal.style.display = "block";
            openTab(event, 'GADrawing');
        }
    }
}

Autodesk.Viewing.theExtensionManager.registerExtension('LoggerExtension', LoggerExtension);
