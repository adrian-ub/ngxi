import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirHospitalCircleIcon],svg[iconoir-hospital-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M8 12h8m-8 0V7m0 5v5m8-5v5m0-5V7"></svg:path>`,
})
export class IconoirHospitalCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
