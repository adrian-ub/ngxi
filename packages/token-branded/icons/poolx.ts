import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPoolxIcon],svg[token-branded-poolx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#181B1E"><svg:path d="M5.081 16.528L15.307 3.31l.89.691l-10.222 13.22l-.888-.693z"></svg:path><svg:path d="m20.466 10.11l-11.24 2.475l-5.889-2.498l.44-1.035l5.551 2.363l10.89-2.396l.242 1.096z"></svg:path><svg:path d="M11.448 20.224L15.015 3.63l1.096.236l-3.56 16.594z"></svg:path><svg:path fill-rule="evenodd" d="M8.524 4.125L4.215 9.733l1.547 6.846l6.244 3.161l6.322-3.161l1.463-6.83l-4.4-5.624zM15.937 3h-7.97L3 9.469l1.783 7.875L12 21l7.312-3.656L21 9.469z" clip-rule="evenodd"></svg:path><svg:path d="M18.311 17.315L7.81 4.012l.883-.698l10.502 13.298l-.884.697z"></svg:path></svg:g>`,
})
export class TokenBrandedPoolxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
