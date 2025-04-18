import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCircleHouseIcon],svg[icon-park-twotone-circle-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCircleHouse0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 23H4s10.5-6 15-11s5.5-8 5.5-8s1 3 5.5 8s14 11 14 11"></svg:path><svg:path fill="#555" d="M8 31h32v13H8zm5-8h22v8H13z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCircleHouse0)"></svg:path>`,
})
export class IconParkTwotoneCircleHouseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
