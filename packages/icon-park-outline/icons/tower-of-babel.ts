import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTowerOfBabelIcon],svg[icon-park-outline-tower-of-babel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M20 14.5V4h8v9.5M14 25v-9.538L34 13v10M11 35v-9l26-3v9m3 12H8v-8l32-4z"></svg:path>`,
})
export class IconParkOutlineTowerOfBabelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
