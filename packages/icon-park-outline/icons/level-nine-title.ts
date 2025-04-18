import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLevelNineTitleIcon],svg[icon-park-outline-level-nine-title-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 8v32M24 8v32M7 24h16"></svg:path><svg:path d="M36.5 21a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 36c.818 2.193 2.548 4 5.5 4c3.038 0 5.5-2.686 5.5-6v-7"></svg:path></svg:g>`,
})
export class IconParkOutlineLevelNineTitleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
