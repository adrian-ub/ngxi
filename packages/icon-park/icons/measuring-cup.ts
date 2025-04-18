import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMeasuringCupIcon],svg[icon-park-measuring-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M36 6H43.9996L42.0641 20H36"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M8.99939 6H35.9996V40C35.9996 41.1046 35.1042 42 33.9996 42H10.9993C9.89478 42 8.99936 41.1046 8.99932 40.0001L8.9986 16.4999C8.99857 15.5557 8.55544 14.672 7.8388 14.0572C5.14776 11.7488 -0.590926 6 8.99939 6Z"></svg:path><svg:path stroke="#fff" d="M26 15H30"></svg:path><svg:path stroke="#fff" d="M26 23H30"></svg:path><svg:path stroke="#fff" d="M26 31H30"></svg:path></svg:g>`,
})
export class IconParkMeasuringCupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
