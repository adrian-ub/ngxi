import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionCalendarIcon],svg[ion-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 128a64 64 0 0 0-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4ZM32 416a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V179a3 3 0 0 0-3-3H35a3 3 0 0 0-3 3Zm344-208a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24"></svg:path>`,
})
export class IonCalendarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
