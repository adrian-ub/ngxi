import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdRadioButtonOnIcon],svg[ion-md-radio-button-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 152c-57.2 0-104 46.8-104 104s46.8 104 104 104 104-46.8 104-104-46.8-104-104-104zm0-104C141.601 48 48 141.601 48 256s93.601 208 208 208 208-93.601 208-208S370.399 48 256 48zm0 374.4c-91.518 0-166.4-74.883-166.4-166.4S164.482 89.6 256 89.6 422.4 164.482 422.4 256 347.518 422.4 256 422.4z" fill="currentColor"></svg:path>`,
})
export class IonMdRadioButtonOnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
