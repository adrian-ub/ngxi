import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPdexIcon],svg[token-pdex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18.755v-2.54l-4.219-4.212H14.25zM3 5.64v2.47l4.291 4.537H9.75zM5.25 3h2.46l4.254 4.203L16.18 3h2.57L12 9.776zm0 18h2.46l4.253-4.202L16.18 21h2.571L12 14.266zM12 13.29a1.286 1.286 0 1 0 0-2.572a1.286 1.286 0 0 0 0 2.572"></svg:path>`,
})
export class TokenPdexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
