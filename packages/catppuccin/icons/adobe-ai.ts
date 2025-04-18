import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinAdobeAiIcon],svg[catppuccin-adobe-ai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M14.5 4.389v7.222a2.89 2.89 0 0 1-2.889 2.889H4.39a2.89 2.89 0 0 1-2.89-2.889V4.39A2.89 2.89 0 0 1 4.389 1.5h7.222A2.89 2.89 0 0 1 14.5 4.389M11 8v3m0-5.007V6"></svg:path><svg:path d="m4.5 11l.844-2.25M9 11l-.844-2.25m-2.812 0L6.75 5l1.406 3.75m-2.812 0h2.812"></svg:path></svg:g>`,
})
export class CatppuccinAdobeAiIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
