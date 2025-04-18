import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAllinIcon],svg[token-allin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 19.875h4.45l.652-2.25h5.546l.652 2.25h4.45l-5.372-15.75H8.372zm9.563-5.625l-1.688-5.676l-1.688 5.676z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.063 4.125H21v15.75h-3.937z"></svg:path>`,
})
export class TokenAllinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
