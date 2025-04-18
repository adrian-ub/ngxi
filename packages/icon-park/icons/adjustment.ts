import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAdjustmentIcon],svg[icon-park-adjustment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 8C5 6.34315 6.34315 5 8 5H40C41.6569 5 43 6.34315 43 8V40C43 41.6569 41.6569 43 40 43H8C6.34315 43 5 41.6569 5 40V8Z"></svg:path><svg:path stroke="#fff" d="M36 12L12 36"></svg:path><svg:path stroke="#fff" d="M12 16H20"></svg:path><svg:path stroke="#fff" d="M27 33H35"></svg:path><svg:path stroke="#fff" d="M16 12V20"></svg:path></svg:g>`,
})
export class IconParkAdjustmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
