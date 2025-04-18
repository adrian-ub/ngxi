import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPlugChargingLightIcon],svg[ph-plug-charging-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 58h-50V16a6 6 0 0 0-12 0v42H94V16a6 6 0 0 0-12 0v42H32.55A6.1 6.1 0 0 0 26 64a6 6 0 0 0 6 6h18v90a38 38 0 0 0 38 38h34v42a6 6 0 0 0 12 0v-42h34a38 38 0 0 0 38-38V70h18a6 6 0 0 0 0-12m-30 102a26 26 0 0 1-26 26H88a26 26 0 0 1-26-26V70h132Zm-86.93-28.58a6 6 0 0 1-.69-5.53l12-32a6 6 0 1 1 11.24 4.22l-9 23.89H144a6 6 0 0 1 5.62 8.11l-12 32a6 6 0 0 1-11.24-4.22l9-23.89H112a6 6 0 0 1-4.93-2.58"></svg:path>`,
})
export class PhPlugChargingLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
