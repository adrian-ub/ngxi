import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinAdobeAeIcon],svg[catppuccin-adobe-ae-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.5 4.389v7.222a2.89 2.89 0 0 1-2.889 2.889H4.39a2.89 2.89 0 0 1-2.89-2.889V4.39A2.89 2.89 0 0 1 4.389 1.5h7.222A2.89 2.89 0 0 1 14.5 4.389"></svg:path><svg:path d="M9.499 8.667V7.89a1.5 1.555 0 0 1 1.499-1.555v0a1.5 1.555 0 0 1 1.5 1.555v.777Zm0 0v.778A1.5 1.555 0 0 0 10.998 11h1.125M3.5 11l.843-2.333M8 11l-.843-2.333m-2.812 0L5.75 4.78l1.406 3.888m-2.812 0h2.812"></svg:path></svg:g>`,
})
export class CatppuccinAdobeAeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
