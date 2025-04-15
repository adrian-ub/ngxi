import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsTableIcon],svg[radix-icons-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2h4.5a.5.5 0 0 1 .5.5V5H8zM7 5V2H2.5a.5.5 0 0 0-.5.5V5zM2 6v3h5V6zm6 0h5v3H8zm0 4h5v2.5a.5.5 0 0 1-.5.5H8zm-6 2.5V10h5v3H2.5a.5.5 0 0 1-.5-.5m-1-10A1.5 1.5 0 0 1 2.5 1h10A1.5 1.5 0 0 1 14 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsTableIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
