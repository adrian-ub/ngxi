import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosUploadIcon],svg[ion-ios-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M264 144v162h-16V144H96v304h320V144z" fill="currentColor"></svg:path><svg:path d="M264 63.4l54.8 54.7 11.6-11.6L256 32l-74.5 74.5 11.7 11.6L248 63.4V144h16z" fill="currentColor"></svg:path>`,
})
export class IonIosUploadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
