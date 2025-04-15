import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsSwitchIcon],svg[radix-icons-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m-2.829 7A4.5 4.5 0 0 1 6 7.5c0-1.414.652-2.675 1.671-3.5H4.5a3.5 3.5 0 1 0 0 7zM0 7.5A4.5 4.5 0 0 1 4.5 3h6a4.5 4.5 0 1 1 0 9h-6A4.5 4.5 0 0 1 0 7.5" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsSwitchIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
