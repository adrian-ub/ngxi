import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCode20Icon],svg[fluent-color-code-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCode200)" d="M12.859 2.567a1 1 0 0 1 .574 1.292l-5 13a1 1 0 1 1-1.866-.718l5-13a1 1 0 0 1 1.292-.574"></svg:path><svg:path fill="url(#fluentColorCode201)" d="M6.15 5.74a1 1 0 0 1 .11 1.41L3.816 10l2.442 2.85a1 1 0 0 1-1.518 1.3l-3-3.5a1 1 0 0 1 0-1.3l3-3.5a1 1 0 0 1 1.41-.11"></svg:path><svg:path fill="url(#fluentColorCode202)" d="M13.74 7.15a1 1 0 0 1 1.52-1.3l3 3.5a1 1 0 0 1 0 1.3l-3 3.5a1 1 0 0 1-1.52-1.3L16.184 10z"></svg:path><svg:defs><svg:lineargradient id="fluentColorCode200" x1="2" x2="19" y1="1.5" y2="18" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C76EFB"></svg:stop><svg:stop offset="1" stop-color="#8B52F4"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCode201" x1="2" x2="19" y1="1.5" y2="18" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C76EFB"></svg:stop><svg:stop offset="1" stop-color="#8B52F4"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCode202" x1="2" x2="19" y1="1.5" y2="18" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C76EFB"></svg:stop><svg:stop offset="1" stop-color="#8B52F4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorCode20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
