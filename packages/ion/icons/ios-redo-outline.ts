import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosRedoOutlineIcon],svg[ion-ios-redo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 400h10.3l19.2-31.2c20.5-32.7 44.9-62.8 75.8-76.6 24.4-10.9 46.7-18.9 86.7-20V352l192-128L256 96v80.3c-63 2.8-108.1 20.7-143.3 56.2C60.4 285.2 64 351.5 64 368.2c.1 8.9 0 21.7 0 31.8zm208-208v-64.7l148.1 96.8L272 320.8V256c-91 0-144.6 24.6-192.2 105.4 0 0-8.8-169.4 192.2-169.4z" fill="currentColor"></svg:path>`,
})
export class IonIosRedoOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
