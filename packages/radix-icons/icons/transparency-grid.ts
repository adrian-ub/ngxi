import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsTransparencyGridIcon],svg[radix-icons-transparency-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h3v3H0zm6 3H3v3H0v3h3v3H0v3h3v-3h3v3h3v-3h3v3h3v-3h-3V9h3V6h-3V3h3V0h-3v3H9V0H6zm0 3V3h3v3zm0 3H3V6h3zm3 0V6h3v3zm0 0H6v3h3z" clip-rule="evenodd" opacity=".25"></svg:path>`
})
export class RadixIconsTransparencyGridIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
