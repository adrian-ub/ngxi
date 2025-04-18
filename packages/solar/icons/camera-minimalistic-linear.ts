import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCameraMinimalisticLinearIcon],svg[solar-camera-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="13" r="3"></svg:circle><svg:path d="M10 20h4c2.809 0 4.214 0 5.222-.674a4 4 0 0 0 1.104-1.104C21 17.213 21 15.81 21 13s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C18.213 6 16.81 6 14 6h-4c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C3 8.787 3 10.19 3 12.998V13c0 2.809 0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C5.787 20 7.19 20 10 20Z"></svg:path><svg:path stroke-linecap="round" d="M18 10h-.5M15 3H9"></svg:path></svg:g>`,
})
export class SolarCameraMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
