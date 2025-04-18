import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhTreediagramIcon],svg[whh-treediagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024h-64q-27 0-45.5-18.5T768 960v-64q0-26 18.5-45t45.5-19V576H512v256q26 0 45 19t19 45v64q0 27-19 45.5t-45 18.5h-64q-27 0-45.5-18.5T384 960v-64q0-26 18.5-45t45.5-19V576H128v256q26 0 45 19t19 45v64q0 27-19 45.5t-45 18.5H64q-27 0-45.5-18.5T0 960v-64q0-26 18.5-45T64 832V544q0-13 9.5-22.5T96 512h352V320h-64q-27 0-45.5-18.5T320 256V64q0-26 18.5-45T384 0h192q26 0 45 19t19 45v192q0 27-19 45.5T576 320h-64v192h352q13 0 22.5 9.5T896 544v288q26 0 45 19t19 45v64q0 27-19 45.5t-45 18.5"></svg:path>`,
})
export class WhhTreediagramIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
