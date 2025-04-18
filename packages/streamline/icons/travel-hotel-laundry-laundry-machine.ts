import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelHotelLaundryLaundryMachineIcon],svg[streamline-travel-hotel-laundry-laundry-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:circle cx="7" cy="8" r="3.5"></svg:circle><svg:path d="M.5 3.5h3m7 0h3M7 7.97v3.5M4 6.2l3 1.77m3-1.77L7 7.97"></svg:path></svg:g>`,
})
export class StreamlineTravelHotelLaundryLaundryMachineIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
