import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPendleIcon],svg[token-branded-pendle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="M19.2 10.2a7.2 7.2 0 1 1-14.4 0a7.2 7.2 0 0 1 14.4 0"></svg:path><svg:path fill="#152E51" d="M8.76 21a3.961 3.961 0 1 0 .001-7.922a3.961 3.961 0 0 0 0 7.922"></svg:path><svg:path fill="#152E51" d="M8.326 4.007v10.017h.883V3.56q-.459.194-.883.446"></svg:path></svg:g>`,
})
export class TokenBrandedPendleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
