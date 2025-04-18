import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosEmailIcon],svg[ion-ios-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M448 384V141.8l-131.1 99.8L385 319l-2 2-78.9-69.6L256 288l-48.1-36.6L129 321l-2-2 68-77.4L64 142v242z" fill="currentColor"></svg:path><svg:path d="M439.7 128H72l184 139.9z" fill="currentColor"></svg:path>`,
})
export class IonIosEmailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
