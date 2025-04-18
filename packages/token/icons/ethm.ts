import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenEthmIcon],svg[token-ethm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 7.5l-5.684 3.24L12 3zm0 0l5.684 3.24L12 3zm0 1.246l-5.684 3.268L12 14.43z"></svg:path><svg:path fill="currentColor" d="m12 21l-5.684-9.01L12 14.374zm0-12.254l5.684 3.264L12 14.425z"></svg:path><svg:path fill="currentColor" d="m12 20.998l5.684-9.009L12 14.372z"></svg:path>`,
})
export class TokenEthmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
