import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosResizeIcon],svg[ion-ios-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M418.3 80H307.8c-7.5 0-13.7 6.1-13.7 13.7v.2c0 7.5 6.1 13.7 13.7 13.7h76.5L107.6 384.3v-76.5c0-7.5-6.1-13.7-13.7-13.7h-.2c-7.5 0-13.7 6.1-13.7 13.7v110.5c0 7.5 6.1 13.7 13.7 13.7h110.5c7.5 0 13.7-6.1 13.7-13.7v-.2c0-7.5-6.1-13.7-13.7-13.7h-76.5l276.7-276.7v76.5c0 7.5 6.1 13.7 13.7 13.7h.2c7.5 0 13.7-6.1 13.7-13.7V93.7c0-7.6-6.1-13.7-13.7-13.7z" fill="currentColor"></svg:path>`,
})
export class IonIosResizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
