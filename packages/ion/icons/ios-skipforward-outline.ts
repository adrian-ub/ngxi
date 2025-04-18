import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosSkipforwardOutlineIcon],svg[ion-ios-skipforward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M337 96v141.8L96 96v320l241-141.8V416h79V96h-79zm-8.1 164.4L112 388V124l216.9 127.6 7.6 4.4-7.6 4.4zM400 400h-47V112h47v288z" fill="currentColor"></svg:path>`,
})
export class IonIosSkipforwardOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
