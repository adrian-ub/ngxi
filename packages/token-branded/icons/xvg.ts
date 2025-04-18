import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedXvgIcon],svg[token-branded-xvg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#34BDE2"><svg:path d="M17.226 3L12 15.774L6.774 3H4.452L12 21l7.55-18z"></svg:path><svg:path d="M12 9.715L14.903 3H9.097z"></svg:path></svg:g>`,
})
export class TokenBrandedXvgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
