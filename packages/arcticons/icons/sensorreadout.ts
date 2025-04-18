import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSensorreadoutIcon],svg[arcticons-sensorreadout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5a13.6 13.6 0 0 0 0 27.19h0A13.6 13.6 0 0 0 24 4.5m0 7.7a5.93 5.93 0 1 0 5.93 5.93A5.94 5.94 0 0 0 24 12.2m9.74 25.73L36.11 42h-4.72Zm0 0l2.37-4.09h-4.72Zm3.85 0H10.36"></svg:path>`,
})
export class ArcticonsSensorreadoutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
