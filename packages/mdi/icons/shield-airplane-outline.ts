import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShieldAirplaneOutlineIcon],svg[mdi-shield-airplane-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11c0 5.55-3.84 10.74-9 12c-5.16-1.26-9-6.45-9-12V5l9-4l9 4zm-9 10c3.75-1 7-5.46 7-9.78V6.3l-7-3.12L5 6.3v4.92C5 15.54 8.25 20 12 21m0-15.32c.5 0 .95.43.95.95v3.48L18 13.26v1.27l-5.05-1.58v3.47l1.26.95v.95L12 17.68l-2.21.64v-.95l1.26-.95v-3.47L6 14.53v-1.27l5.05-3.15V6.63c0-.52.45-.95.95-.95"></svg:path>`,
})
export class MdiShieldAirplaneOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
