import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionLogoYahooIcon],svg[ion-logo-yahoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 139.009h97.648l56.86 145.729l57.6-145.729h95.066L164.022 484H68.337l39.189-91.417L.003 139.009zM417.5 256H311l94.907-228L512 28.005zm-78.208 21.221c32.672 0 59.156 26.533 59.156 59.258c0 32.727-26.484 59.26-59.156 59.26c-32.667 0-59.146-26.533-59.146-59.26c0-32.725 26.483-59.258 59.146-59.258"></svg:path>`,
})
export class IonLogoYahooIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
