import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsContainerIcon],svg[radix-icons-container-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M5 13h5V2H5zm-1 0a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1zm9.5-11a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M2 3.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m11.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M2 5.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m11.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M2 7.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m11.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M2 9.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m11.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M2 11.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m11.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M2 13.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m11.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsContainerIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
