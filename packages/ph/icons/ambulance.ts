import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAmbulanceIcon],svg[ph-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 120a8 8 0 0 1 8-8h16V96a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16h-16v16a8 8 0 0 1-16 0v-16H88a8 8 0 0 1-8-8m176 0v64a16 16 0 0 1-16 16h-17a32 32 0 0 1-62 0h-50a32 32 0 0 1-62 0H32a16 16 0 0 1-16-16V72a16 16 0 0 1 16-16h152a8 8 0 0 1 8 8v8h34.58a15.93 15.93 0 0 1 14.86 10.06l14 35A7.9 7.9 0 0 1 256 120m-64-32v24h44.18l-9.6-24ZM32 184h17a32 32 0 0 1 62 0h50a32.1 32.1 0 0 1 15-19.69V72H32Zm64 8a16 16 0 1 0-16 16a16 16 0 0 0 16-16m112 0a16 16 0 1 0-16 16a16 16 0 0 0 16-16m32-8v-56h-48v32a32.06 32.06 0 0 1 31 24Z"></svg:path>`,
})
export class PhAmbulanceIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
