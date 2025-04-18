import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCuminuIcon],svg[token-branded-cuminu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFD9E6" d="m8.5 12l-4 2.5v-5z"></svg:path><svg:path fill="#FF1381" d="m9.66 10.5l3.09-2.29l3.09 2.29l3.66-2.625L12.75 3L6 7.875zm0 3l3.09 2.29l3.09-2.29l3.66 2.625L12.75 21L6 16.125z"></svg:path></svg:g>`,
})
export class TokenBrandedCuminuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
