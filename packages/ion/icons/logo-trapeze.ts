import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionLogoTrapezeIcon],svg[ion-logo-trapeze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m311.05 189.26l.055-.093l64.98-110.618L257.923 8l-64.98 110.617l-.096.164L8 433.451L126.162 504l85.948-146.312c14.612 17.618 32.393 33.074 53.108 45.442l168.804 100.785L504 384.789L335.197 284.004c-32.599-19.463-43.396-61.862-24.147-94.744"></svg:path>`,
})
export class IonLogoTrapezeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
