import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLevelAdjustmentIcon],svg[icon-park-level-adjustment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M11.1139 18L14.877 3.95581L41.9229 11.2027L40.1016 18M7.89848 30L6.07715 36.7973L33.1231 44.0442L36.8862 30"></svg:path><svg:path stroke-dasharray="2 6" d="M4 24H44"></svg:path></svg:g>`,
})
export class IconParkLevelAdjustmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
