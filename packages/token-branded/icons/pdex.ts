import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPdexIcon],svg[token-branded-pdex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#fff" d="M21 18.755v-2.54l-4.219-4.212H14.25zM3 5.64v2.47l4.291 4.537H9.75zM5.25 3h2.46l4.254 4.203L16.18 3h2.57L12 9.776zm0 18h2.46l4.253-4.202L16.18 21h2.571L12 14.266z"></svg:path><svg:path fill="#E6007A" d="M12 13.29a1.286 1.286 0 1 0 0-2.573a1.286 1.286 0 0 0 0 2.573"></svg:path></svg:g>`,
})
export class TokenBrandedPdexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
