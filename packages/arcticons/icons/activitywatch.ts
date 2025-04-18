import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsActivitywatchIcon],svg[arcticons-activitywatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.725 22.688l5.564-9.637m-7.542 11.772L9.913 33.917m13.484-11.29l-5.93-12.74l-6.46 14.013m2.18-4.73h8.6m16.223 4.759l-3.501 14l-3.5-14l-3.5 14l-3.12-12.481"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsActivitywatchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
