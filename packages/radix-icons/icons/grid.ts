import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsGridIcon],svg[radix-icons-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 2H8v5h5V2.5a.5.5 0 0 0-.5-.5m.5 6H8v5h4.5a.5.5 0 0 0 .5-.5zM7 7V2H2.5a.5.5 0 0 0-.5.5V7zM2 8v4.5a.5.5 0 0 0 .5.5H7V8zm.5-7A1.5 1.5 0 0 0 1 2.5v10A1.5 1.5 0 0 0 2.5 14h10a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 12.5 1z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsGridIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
