import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaHelpIcon],svg[gala-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:circle cx="181.018" cy="-.001" r="112.049" transform="rotate(45)"></svg:circle><svg:circle cx="181.018" cy="-.001" r="48.021" transform="rotate(45)"></svg:circle><svg:path d="M 171.33275,107.30371 226.85481,75.248027"></svg:path><svg:path d="M 148.69466,84.66561 180.75035,29.143566"></svg:path><svg:path d="M 84.667256,148.69302 29.145241,180.74869"></svg:path><svg:path d="M 107.30535,171.33111 75.249699,226.85316"></svg:path><svg:path d="m 148.69466,171.33111 32.05569,55.52205"></svg:path><svg:path d="m 171.33275,148.69302 55.52206,32.05567"></svg:path><svg:path d="M 107.30535,84.665618 75.249699,29.143573"></svg:path><svg:path d="M 84.667256,107.30372 29.145241,75.248046"></svg:path></svg:g>`,
})
export class GalaHelpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
