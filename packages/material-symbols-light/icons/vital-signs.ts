import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVitalSignsIcon],svg[material-symbols-light-vital-signs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.425 18.25q-.266 0-.477-.161t-.31-.41L6.57 12.5H2.04v-1h5.238l2.146 5.446l4.37-10.644q.097-.249.307-.41t.475-.161q.266 0 .477.16q.211.162.31.411L17.47 11.5H22v1h-5.238l-2.185-5.466l-4.37 10.645q-.097.249-.307.41t-.475.161"></svg:path>`,
})
export class MaterialSymbolsLightVitalSignsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
