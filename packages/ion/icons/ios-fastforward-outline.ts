import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosFastforwardOutlineIcon],svg[ion-ios-fastforward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M48 155l183.5 101L48 356.9V155m224 .8L448 256 272 356.4V156m-16-28v123.2L32 128v256l224-123.2V384l224-128-224-128z" fill="currentColor"></svg:path>`,
})
export class IonIosFastforwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
