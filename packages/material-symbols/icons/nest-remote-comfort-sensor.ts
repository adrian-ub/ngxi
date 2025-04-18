import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNestRemoteComfortSensorIcon],svg[material-symbols-nest-remote-comfort-sensor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-1.65 0-2.825-1.175T8 17t1.175-2.825T12 13t2.825 1.175T16 17t-1.175 2.825T12 21M3.05 8.6L1.575 7.225q2.025-1.975 4.7-3.1T12 3t5.725 1.125t4.7 3.1L20.95 8.6q-1.775-1.675-4.05-2.637T12 5t-4.9.963T3.05 8.6m14.25 3.425q-1.05-.95-2.4-1.487T12 10t-2.887.538T6.7 12.025L5.225 10.65Q6.575 9.4 8.313 8.7T12 8t3.675.7t3.075 1.95z"></svg:path>`,
})
export class MaterialSymbolsNestRemoteComfortSensorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
