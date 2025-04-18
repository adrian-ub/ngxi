import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTowerOfBabelIcon],svg[icon-park-twotone-tower-of-babel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTowerOfBabel0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 14.5V4h8v9.5M14 25v-9.538L34 13v10M11 35v-9l26-3v9"></svg:path><svg:path fill="#555" d="M40 44H8v-8l32-4z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTowerOfBabel0)"></svg:path>`,
})
export class IconParkTwotoneTowerOfBabelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
