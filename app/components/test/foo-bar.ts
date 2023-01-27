import EmberObject, { action } from '@ember/object';
import Component from '@glimmer/component';
import { EmptyObject } from '@glimmer/component/-private/component';
import { tracked } from '@glimmer/tracking';

export default class FooBar extends Component {
    @tracked
    files: string[];

    constructor(owner: unknown, args: EmptyObject) {
      super(owner, args);
        const files: string[] = [];
        for (let i = 0; i < 10; i++) {
            files.push(`file-${i}`);
        }
        this.files = files;
    }

    @action
    addFile(): void {
        this.files.push(`file-${this.files.length}`);
        this.files = this.files;
    }
}