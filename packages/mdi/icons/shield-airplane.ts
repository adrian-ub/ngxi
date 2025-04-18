import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShieldAirplaneIcon],svg[mdi-shield-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm0 4.68c.5 0 .95.43.95.95v3.48L18 13.26v1.27l-5.05-1.58v3.47l1.26.95v.95L12 17.68l-2.21.64v-.95l1.26-.95v-3.47L6 14.53v-1.27l5.05-3.15V6.63c0-.52.45-.95.95-.95"></svg:path>`,
})
export class MdiShieldAirplaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
