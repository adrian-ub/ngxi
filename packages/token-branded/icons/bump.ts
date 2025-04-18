import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBumpIcon],svg[token-branded-bump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FA7438" d="m8.561 2.001l-2.045 9.032h13.729c.58-.632 1.755-2.426 1.755-4.58c0-3.665-3.071-4.49-4.607-4.452z"></svg:path><svg:path fill="#FD4C27" d="M17.51 12.968H4.025L2 22h8.49c3.361 0 7.639-2.568 7.639-7.032a3.03 3.03 0 0 0-.62-2"></svg:path></svg:g>`,
})
export class TokenBrandedBumpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
