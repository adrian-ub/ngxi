import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBumpIcon],svg[token-bump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.562 2.001l-2.045 9.032h13.728c.58-.632 1.754-2.426 1.754-4.58c0-3.665-3.07-4.49-4.606-4.452zm8.948 10.967H4.025L2.001 22h8.49c3.36 0 7.638-2.568 7.638-7.032a3.03 3.03 0 0 0-.62-2"></svg:path>`,
})
export class TokenBumpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
