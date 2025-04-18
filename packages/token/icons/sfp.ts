import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenSfpIcon],svg[token-sfp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.43 3.61a2.06 2.06 0 0 1 1.462-.607h10.105L16.667 7.5H8.29c-.529 0-.788.26-.788.788v7.057l-4.155-3.987a1.18 1.18 0 0 1 0-1.67zm6.281 12.89H7.333l-4.33 4.498h10.105c.55 0 1.068-.22 1.462-.607l6.084-6.079a1.18 1.18 0 0 0 0-1.67L16.5 8.654v7.057c0 .529-.26.788-.788.788"></svg:path>`,
})
export class TokenSfpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
