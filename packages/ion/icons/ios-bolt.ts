import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosBoltIcon],svg[ion-ios-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M302.7 64L143 288h95.8l-29.5 160L369 224h-95.8l29.5-160z" fill="currentColor"></svg:path>`,
})
export class IonIosBoltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
