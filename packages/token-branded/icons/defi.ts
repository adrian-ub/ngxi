import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDefiIcon],svg[token-branded-defi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#02A5C2" d="M7.737 7.973V4.184H21v3.79z"></svg:path><svg:path fill="#5FCADE" d="M7.737 13.656v-3.79h9.473v3.79zm-4.737 0v-3.79h3.79v3.79z"></svg:path><svg:path fill="#ABEBF4" d="M7.737 19.816v-3.79H12v3.79z"></svg:path></svg:g>`,
})
export class TokenBrandedDefiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
