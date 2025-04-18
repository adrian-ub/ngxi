import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBoaIcon],svg[token-boa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 8.063h18v2.812h-1.125l.281 9H21V21H3v-1.125h.844l.281-9H3zm4.5 2.812h2.813l-.372 9h-2.11zm6.187 0H16.5l-.371 9h-2.11z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.25 6.937L11.977 3l6.773 3.937z"></svg:path>`,
})
export class TokenBoaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
