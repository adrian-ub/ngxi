import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPolkIcon],svg[token-branded-polk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#5751FB" d="M19.579 12L12 21l2.021-11.5z"></svg:path><svg:path fill="#3033BE" d="m12 21l-7.58-9l9.6-2.5z"></svg:path><svg:path fill="#51A0FC" d="M19.579 12L14.02 9.5L12 3z"></svg:path><svg:path fill="#5751FB" d="m12 3l-7.58 9l9.602-2.5z"></svg:path></svg:g>`,
})
export class TokenBrandedPolkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
