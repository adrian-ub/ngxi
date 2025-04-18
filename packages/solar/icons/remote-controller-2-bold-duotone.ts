import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRemoteController2BoldDuotoneIcon],svg[solar-remote-controller-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.674 3.778C5 4.787 5 6.19 5 9v6c0 2.809 0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C7.787 22 9.19 22 12 22s4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C19 19.213 19 17.81 19 15V9c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M10 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5 2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M14 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 15.5a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarRemoteController2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
