import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUsbMicroTwoIcon],svg[icon-park-usb-micro-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 18C4 16.3431 5.34315 15 7 15H41C42.6569 15 44 16.3431 44 18V24.1396C44 24.7019 43.842 25.2528 43.544 25.7296L39.8813 31.59C39.333 32.4671 38.3716 33 37.3373 33H10.6627C9.62837 33 8.66696 32.4671 8.11875 31.59L4.456 25.7296C4.15801 25.2528 4 24.7019 4 24.1396V18Z"></svg:path><svg:path fill="#2F88FF" stroke="#fff" d="M11 15H37V23H11V15Z"></svg:path><svg:path stroke="#fff" d="M21 23V21"></svg:path><svg:path stroke="#fff" d="M27 23V21"></svg:path><svg:path stroke="#fff" d="M32 23V21"></svg:path><svg:path stroke="#fff" d="M16 23V21"></svg:path><svg:path stroke="#000" d="M8 15L40 15"></svg:path></svg:g>`,
})
export class IconParkUsbMicroTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
