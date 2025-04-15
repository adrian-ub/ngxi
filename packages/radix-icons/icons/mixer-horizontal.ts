import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsMixerHorizontalIcon],svg[radix-icons-mixer-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M3 5l.05-.002a2.5 2.5 0 0 0 4.9 0L8 5h5.5a.5.5 0 0 0 0-1H8l-.05.002a2.5 2.5 0 0 0-4.9 0L3 4H1.5a.5.5 0 0 0 0 1zm8.95 5.998a2.5 2.5 0 0 1-4.9 0L7 11H1.5a.5.5 0 0 1 0-1H7l.05.002a2.5 2.5 0 0 1 4.9 0L12 10h1.5a.5.5 0 0 1 0 1H12zM8 10.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsMixerHorizontalIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
