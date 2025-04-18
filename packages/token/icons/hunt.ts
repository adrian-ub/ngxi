import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenHuntIcon],svg[token-hunt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.372 4.029a1.028 1.028 0 1 1 2.057 0V8.41a4.628 4.628 0 0 1 7.2 3.847v4.629a1.03 1.03 0 0 1-2.057 0v-4.629a2.571 2.571 0 0 0-5.143 0v4.629a1.029 1.029 0 0 1-2.057 0zM9.429 19.97a1.029 1.029 0 1 1-2.058 0a1.029 1.029 0 0 1 2.058 0M15.6 21a1.029 1.029 0 1 0 0-2.057a1.029 1.029 0 0 0 0 2.057"></svg:path>`,
})
export class TokenHuntIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
