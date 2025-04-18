import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPhaIcon],svg[token-pha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 3h14.143v3.857H21V12h-3.857V6.857H6.857V12H3zm3.857 12.857h10.286V12H6.857zm0 0V21H3v-5.143z" clip-rule="evenodd"></svg:path>`,
})
export class TokenPhaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
