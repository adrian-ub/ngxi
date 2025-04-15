import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsFontSizeIcon],svg[radix-icons-font-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.782 2.217a.4.4 0 0 0-.565 0l-2 2a.4.4 0 0 0 .565.566L2.1 3.466v8.068L.782 10.217a.4.4 0 0 0-.565.566l2 2a.4.4 0 0 0 .565 0l2-2a.4.4 0 0 0-.565-.566l-1.318 1.317V3.466l1.318 1.317a.4.4 0 0 0 .565-.566zm7.718.533a.5.5 0 0 1 .47.33l3 8.32a.5.5 0 0 1-.94.34l-.982-2.724H8.952l-.982 2.723a.5.5 0 0 1-.94-.34l3-8.319a.5.5 0 0 1 .47-.33m0 1.974l1.241 3.442H9.26z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsFontSizeIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
