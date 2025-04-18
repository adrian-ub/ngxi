import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsViettelMoneyIcon],svg[arcticons-viettel-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.071 4.5h-6.285v5.571h6.5V37.93h-6.5v5.57h6.285a3 3 0 0 0 3-3v-33a3 3 0 0 0-3-3m-18.142 39h6.285v-5.571h-6.5V10.07h6.5V4.5H14.93a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3"></svg:path>`,
})
export class ArcticonsViettelMoneyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
