import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCircleHouseIcon],svg[icon-park-outline-circle-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 23H4s10.5-6 15-11s5.5-8 5.5-8s1 3 5.5 8s14 11 14 11M8 31h32v13H8zm5-8h22v8H13z"></svg:path>`,
})
export class IconParkOutlineCircleHouseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
