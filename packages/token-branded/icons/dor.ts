import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDorIcon],svg[token-branded-dor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#128BF4" d="M6.315 15.232L12.01 9.63l5.675 5.602L12.01 21z"></svg:path><svg:path fill="#E21639" d="M6.315 8.603L12.01 3l5.675 5.602L12 14.37z"></svg:path><svg:path fill="#1C4387" d="m9.637 11.969l2.364 2.4l2.371-2.408l.796.789L12 15.988L8.824 12.76z"></svg:path></svg:g>`,
})
export class TokenBrandedDorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
