import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceHotelRoom2Icon],svg[guidance-hotel-room-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.5 18.5V4m0 14.5s0 3-1.5 3m1.5-3h21m0 0s0 3 1.5 3m-1.5-3V13A3.5 3.5 0 0 0 19 9.5h-8.5v4m-9 2h21m-14-4.1S7.5 13 6.25 13a1.75 1.75 0 0 1-1.75-1.75c0-.966.784-1.746 1.75-1.746C7.5 9.504 8.5 11.1 8.5 11.1z"></svg:path>`,
})
export class GuidanceHotelRoom2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
