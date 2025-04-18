import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosRewindOutlineIcon],svg[ion-ios-rewind-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M464 155v201.9L280.5 256 464 155m-224 1v200.4L64 256l176-100.2m16-27.8L32 256l224 128V260.8L480 384V128L256 251.2V128z" fill="currentColor"></svg:path>`,
})
export class IonIosRewindOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
