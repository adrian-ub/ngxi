import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciMoonIcon],svg[ci-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6a9 9 0 0 0 9 9c.91 0 1.787-.134 2.614-.385A9 9 0 0 1 12 21A9 9 0 0 1 9.386 3.386A9 9 0 0 0 9 6"></svg:path>`,
})
export class CiMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
