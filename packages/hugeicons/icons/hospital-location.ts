import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHospitalLocationIcon],svg[hugeicons-hospital-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 2C7.806 2 4 5.618 4 10.08c0 2.553 1.063 4.537 3.188 6.309c1.497 1.25 3.312 3.324 4.401 5.006c.523.807 1.262.807 1.822 0c1.144-1.648 2.904-3.757 4.402-5.006C19.938 14.617 21 12.633 21 10.081C21 5.618 17.194 2 12.5 2m-2 5v3m0 3v-3m4-3v3m0 3v-3m0 0h-4" color="currentColor"></svg:path>`,
})
export class HugeiconsHospitalLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
