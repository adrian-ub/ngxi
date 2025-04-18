import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTimeclockIcon],svg[arcticons-timeclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.434 33.099H14.566m0 10.401h18.868l-2.968-10.401H16.898z"></svg:path><svg:circle cx="24" cy="18.677" r="10.388" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 18.677v-7.364m0 7.364l-3.85 1.861M15.27 40.36H13a3.177 3.177 0 0 1-3.177-3.177h0V7.677A3.177 3.177 0 0 1 12.999 4.5h22.002a3.177 3.177 0 0 1 3.176 3.177h0v29.506a3.177 3.177 0 0 1-3.176 3.177h-2.463"></svg:path>`,
})
export class ArcticonsTimeclockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
