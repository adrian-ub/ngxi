import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosSkipforwardIcon],svg[ion-ios-skipforward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M337 96v141.8L96 96v320l241-141.8V416h79V96h-79z" fill="currentColor"></svg:path>`,
})
export class IonIosSkipforwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
