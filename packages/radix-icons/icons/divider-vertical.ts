import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsDividerVerticalIcon],svg[radix-icons-divider-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 2a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0v-10a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsDividerVerticalIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
