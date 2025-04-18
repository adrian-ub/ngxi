import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCurveAdjustmentIcon],svg[icon-park-solid-curve-adjustment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSCurveAdjustment0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M44 4H4v40h40z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M38 10c-6 0-11 4-14 14s-8 14-14 14"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCurveAdjustment0)"></svg:path>`,
})
export class IconParkSolidCurveAdjustmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
