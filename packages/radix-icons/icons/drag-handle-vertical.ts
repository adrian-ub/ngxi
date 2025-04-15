import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsDragHandleVerticalIcon],svg[radix-icons-drag-handle-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.1 12.5a.4.4 0 0 0 .8 0v-10a.4.4 0 0 0-.8 0zm2 0a.4.4 0 0 0 .8 0v-10a.4.4 0 0 0-.8 0zm2.4.4a.4.4 0 0 1-.4-.4v-10a.4.4 0 1 1 .8 0v10a.4.4 0 0 1-.4.4m1.6-.4a.4.4 0 0 0 .8 0v-10a.4.4 0 0 0-.8 0z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsDragHandleVerticalIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
