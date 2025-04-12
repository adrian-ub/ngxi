import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPleromaIcon],svg[simple-icons-pleroma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.36 0a1.87 1.87 0 0 0-1.87 1.868V24h5.964V0zm7.113 0v12h4.168a1.87 1.87 0 0 0 1.868-1.868V0zm0 18.036V24h4.168a1.87 1.87 0 0 0 1.868-1.868v-4.096Z"></svg:path>`
})
export class SimpleIconsPleromaIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
