import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRopeSkippingOneIcon],svg[icon-park-outline-rope-skipping-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke-miterlimit="2" d="M7 40V22S8 8 15 5s15 6 15 15c0 5-2 9-6 9s-6-4-6-9c0-9 8-18 15-15s8 17 8 17v18"></svg:path><svg:path d="M4 31h6m28 0h6"></svg:path></svg:g>`,
})
export class IconParkOutlineRopeSkippingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
