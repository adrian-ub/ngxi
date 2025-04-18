import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCurveAdjustmentIcon],svg[icon-park-outline-curve-adjustment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 4H4v40h40z"></svg:path><svg:path stroke-linecap="round" d="M38 10c-6 0-11 4-14 14s-8 14-14 14"></svg:path></svg:g>`,
})
export class IconParkOutlineCurveAdjustmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
