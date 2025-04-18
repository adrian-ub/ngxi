import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenDpayIcon],svg[token-dpay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.938 13.125a5.175 5.175 0 0 1-4.979 3.938H4.125V21h6.834a9 9 0 0 0 8.916-7.875zM4.124 3h6.834a9 9 0 0 1 8.916 7.875h-3.937a5.175 5.175 0 0 0-4.979-3.937H4.125zm0 6.188h3.938v1.687H4.124zm0 3.937h3.938v1.688H4.124z"></svg:path>`,
})
export class TokenDpayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
