import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsPressureHighAltIcon],svg[meteocons-pressure-high-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef4444" d="M285 239.2V182h31v148h-31v-63.4h-58V330h-31V182h31v57.2Z"></svg:path>`,
})
export class MeteoconsPressureHighAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
