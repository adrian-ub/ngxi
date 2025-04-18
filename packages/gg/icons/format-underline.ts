import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFormatUnderlineIcon],svg[gg-format-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10V4h2v6a4 4 0 0 0 8 0V4h2v6a6 6 0 0 1-12 0m1 8a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"></svg:path>`,
})
export class GgFormatUnderlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
