import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSortThreeIcon],svg[icon-park-sort-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M25 14L16 5L7 14"></svg:path><svg:path d="M15.9917 31V5"></svg:path><svg:path d="M42 34L33 43L24 34"></svg:path><svg:path d="M32.9917 17V43"></svg:path></svg:g>`,
})
export class IconParkSortThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
