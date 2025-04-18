import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTowerOfBabelIcon],svg[icon-park-solid-tower-of-babel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 14.5V4h8v9.5M14 25v-9.538L34 13v10M11 35v-9l26-3v9"></svg:path><svg:path fill="currentColor" d="M40 44H8v-8l32-4z"></svg:path></svg:g>`,
})
export class IconParkSolidTowerOfBabelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
