import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCurveAdjustmentIcon],svg[icon-park-curve-adjustment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 4H4V44H44V4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M38 10C32 10 27 14 24 24C21 34 16 38 10 38"></svg:path></svg:g>`,
})
export class IconParkCurveAdjustmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
