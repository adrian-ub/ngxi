import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsStopIcon],svg[radix-icons-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm10 0H3v9h9z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsStopIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
