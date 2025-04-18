import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoTimeSlotIcon],svg[entypo-time-slot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 1 0 19.2-.001C19.6 4.698 15.301.4 10 .4m0 17.199a7.6 7.6 0 1 1 0-15.2V10l6.792-3.396A7.55 7.55 0 0 1 17.6 10a7.6 7.6 0 0 1-7.6 7.599"></svg:path>`,
})
export class EntypoTimeSlotIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
