import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1DoorIcon],svg[noto-v1-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#855c52" d="M28.25.72v126.57h71.5V.72z"></svg:path><svg:circle cx="40.74" cy="74.91" r="5.55" fill="#fcc21b"></svg:circle><svg:path fill="#fff" d="M36.48 75.38c.42.98 1.33.65 1.56-.25c.15-.58.47-1.17.87-1.62c.4-.44 1.08-.83 1.63-1.07c.54-.24.93-.42.81-1.12c-.09-.61-.95-.57-1.41-.51c-.52.06-.99.32-1.47.53c-.31.13-.64.27-.86.53c-.84.88-1.66 2.28-1.13 3.51"></svg:path><svg:path fill="#40c0e7" d="M40.74 12.19h46.51V58.7H40.74z"></svg:path><svg:path fill="#006ca2" d="M47.57 19.78h39.68v-7.59H40.74V58.7h6.83z"></svg:path>`,
})
export class NotoV1DoorIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
