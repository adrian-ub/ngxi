import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCreamIcon],svg[token-branded-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#69E2DB" d="m14.217 12.67l5.009 4.98a.95.95 0 0 1-.101 1.424a9.06 9.06 0 0 1-13.26-2.318A8.976 8.976 0 0 1 9.62 3.89a9.08 9.08 0 0 1 9.54 1.058a.94.94 0 0 1 .061 1.396l-5.009 4.986a.95.95 0 0 0-.281.687c0 .13.028.259.079.377a1 1 0 0 0 .208.31z"></svg:path>`,
})
export class TokenBrandedCreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
