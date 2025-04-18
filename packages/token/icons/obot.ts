import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenObotIcon],svg[token-obot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 3h7.2v3h3.6V3H21v7.2h-3v3.6h3V21h-7.2v-3h-3.6v3H3v-7.2h3v-3.6H3zm4.2 7.2v3.6h3v3h3.6v-3h3v-3.6h-3v-3h-3.6v3zM4.8 4.8h3.6v3.6H4.8zm0 10.8h3.6v3.6H4.8zM19.2 4.8h-3.6v3.6h3.6zm-3.6 10.8h3.6v3.6h-3.6z" clip-rule="evenodd"></svg:path>`,
})
export class TokenObotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
