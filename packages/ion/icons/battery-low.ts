import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionBatteryLowIcon],svg[ion-battery-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M42.1 384h381.1c5.5 0 9.9-4.5 9.9-10v-54H470c5.6 0 10.1-4.5 10.1-10V202c0-5.5-4.5-10-10.1-10h-37v-54c0-5.5-4.3-10-9.9-10h-381c-5.6 0-10.1 4.5-10.1 10v236c0 5.5 4.5 10 10.1 10zM401 160v64h47v64h-47v64H224l-32-192h209z" fill="currentColor"></svg:path>`,
})
export class IonBatteryLowIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
