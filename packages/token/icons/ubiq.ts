import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenUbiqIcon],svg[token-ubiq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.35 14.976l5.298 3.272v-7.427z"></svg:path><svg:path fill="currentColor" d="M12.514 3v7.15L4.35 14.976V7.715zm7.136 6.024l-5.298-3.272v7.427z"></svg:path><svg:path fill="currentColor" d="M11.487 21v-7.15l8.163-4.826v7.261z"></svg:path>`,
})
export class TokenUbiqIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
