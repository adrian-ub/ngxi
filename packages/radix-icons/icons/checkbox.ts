import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsCheckboxIcon],svg[radix-icons-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 3h9v9H3zM2 3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm8.35 2.511a.5.5 0 0 0-.825-.566L6.64 9.15L5.197 7.41a.5.5 0 0 0-.77.638l1.866 2.25a.5.5 0 0 0 .797-.037z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsCheckboxIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
