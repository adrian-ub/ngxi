import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenLinaIcon],svg[token-lina-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.64 14.547a2.22 2.22 0 0 1 0-3.118L12.978 3l.389.393a2.22 2.22 0 0 1 0 3.118l-8.339 8.428zm2.997 3.03a2.22 2.22 0 0 1 0-3.118l8.338-8.428l.389.393a2.22 2.22 0 0 1 0 3.118L8.025 17.97zm2.997-.087a2.22 2.22 0 0 0 0 3.117l.389.393l8.338-8.428a2.22 2.22 0 0 0 0-3.118l-.388-.393z"></svg:path>`,
})
export class TokenLinaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
