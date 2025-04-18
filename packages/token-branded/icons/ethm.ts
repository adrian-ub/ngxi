import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEthmIcon],svg[token-branded-ethm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#44A47F" d="m12 7.5l-5.684 3.24L12 3z"></svg:path><svg:path fill="#66AA91" d="m12 7.5l5.684 3.24L12 3z"></svg:path><svg:path fill="#2A9E77" d="m12 8.746l-5.684 3.268L12 14.43z"></svg:path><svg:path fill="#44A47F" d="m12 21l-5.684-9.01L12 14.374zm0-12.254l5.684 3.264L12 14.425z"></svg:path><svg:path fill="#66AA91" d="m12 20.999l5.684-9.01L12 14.372z"></svg:path></svg:g>`,
})
export class TokenBrandedEthmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
