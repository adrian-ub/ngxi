import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiFacebookIcon],svg[zmdi-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M145 429H66V235H0v-76h66v-56q0-48 27-74t72-26q36 0 59 3v67l-41 1q-22 0-30 9t-8 27v49h76l-10 76h-66z"></svg:path>`,
})
export class ZmdiFacebookIcon {
  readonly viewBox = input("0 0 224 432")
  readonly width = input("0.52em")
  readonly height = input("1em")
}
