import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowLeftIcon],svg[ion-ios-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
