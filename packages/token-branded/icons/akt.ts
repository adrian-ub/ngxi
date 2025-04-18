import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAktIcon],svg[token-branded-akt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#DB4533" d="m8.5 4.25l9.515 15.5L21 14.564L14.47 4.25z"></svg:path><svg:path fill="#A12E2A" d="m9 14.749l3 5h6l-3-5z"></svg:path><svg:path fill="#DB4533" d="M6.15 9.25L3 14.5l3.15 5.25l6.35-10.5z"></svg:path></svg:g>`,
})
export class TokenBrandedAktIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
