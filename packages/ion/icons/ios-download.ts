import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosDownloadIcon],svg[ion-ios-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M376 144H269v179.9l47.9-47.2c5.1-5 13.3-5 18.4.1 5 5.1 5 13.3-.1 18.4l-70 69c-2.5 2.4-5.8 3.7-9.1 3.7-1.7 0-3.4-.3-5-1-1.5-.6-2.9-1.6-4.1-2.7l-70-69c-5.1-5-5.2-13.3-.1-18.4 5-5.1 13.3-5.2 18.4-.1l47.9 47.2V144H136c-22 0-40 18-40 40v240c0 22 18 40 40 40h240c22 0 40-18 40-40V184c0-22-18-40-40-40z" fill="currentColor"></svg:path><svg:path d="M269 61c0-7.2-5.8-13-13-13s-13 5.8-13 13v83h26V61z" fill="currentColor"></svg:path>`,
})
export class IonIosDownloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
