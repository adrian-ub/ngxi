import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenMuteIcon],svg[token-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4.2h4.818l4.086 9.6h.192l4.08-9.6H21V15h-3.6v-4.782L13.212 19.8h-2.424L6.6 10.164V19.8H3z"></svg:path><svg:path fill="currentColor" d="M19.2 19.8a1.8 1.8 0 1 0 0-3.6a1.8 1.8 0 0 0 0 3.6"></svg:path>`,
})
export class TokenMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
