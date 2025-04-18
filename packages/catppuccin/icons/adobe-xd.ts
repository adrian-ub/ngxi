import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinAdobeXdIcon],svg[catppuccin-adobe-xd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#f5bde6" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.5 4.389v7.222a2.89 2.89 0 0 1-2.889 2.889H4.39a2.89 2.89 0 0 1-2.89-2.889V4.39A2.89 2.89 0 0 1 4.389 1.5h7.222A2.89 2.89 0 0 1 14.5 4.389M4.483 5l3.024 6m-3.024 0l3.024-6"></svg:path><svg:path d="M11.501 8.143v2.428a.375.429 0 0 1-.375.429h-.875A1.25 1.429 0 0 1 9 9.571v0a1.25 1.429 0 0 1 1.25-1.428zm0 0V6"></svg:path></svg:g>`,
})
export class CatppuccinAdobeXdIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
