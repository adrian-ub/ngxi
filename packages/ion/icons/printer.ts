import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionPrinterIcon],svg[ion-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M423.8 128H384V64H128v64H88.2C60.3 128 32 144.9 32 182.6v123.8c0 38 28.3 61.6 56.2 61.6H128v112h256V368h39.8c27.9 0 56.2-22.6 56.2-53.6V182.6c0-35.7-28.2-54.6-56.2-54.6zM368 464H144V288h224v176zm0-336H144V80h224v48zm48 64h-17v-16h17v16z" fill="currentColor"></svg:path><svg:path d="M160 320h192v16H160z" fill="currentColor"></svg:path><svg:path d="M160 368h192v16H160z" fill="currentColor"></svg:path><svg:path d="M160 416h192v16H160z" fill="currentColor"></svg:path>`,
})
export class IonPrinterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
