import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosArrowRightIcon],svg[ion-ios-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M160 115.4L180.7 96 352 256 180.7 416 160 396.7 310.5 256z" fill="currentColor"></svg:path>`,
})
export class IonIosArrowRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
