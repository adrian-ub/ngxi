import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosBatteryFullIcon],svg[ion-ios-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M396 144H64c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h332c26.4 0 48-21.6 48-48V192c0-26.4-21.6-48-48-48zm20 176c0 11-9 20-20 20H64c-11 0-20-9-20-20V192c0-11 9-20 20-20h332c11 0 20 9 20 20v128z" fill="currentColor"></svg:path><svg:path d="M464 204.6v102.8c16 0 32-27.7 32-51.4s-16-51.4-32-51.4z" fill="currentColor"></svg:path><svg:path d="M384 192H76c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h308c6.6 0 12-5.4 12-12V204c0-6.6-5.4-12-12-12z" fill="currentColor"></svg:path>`,
})
export class IonIosBatteryFullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
