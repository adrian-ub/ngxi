import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTimeInternetIcon],svg[arcticons-time-internet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.611 5.5v27.13c0 5.45 4.42 9.87 9.87 9.87s9.87-4.42 9.87-9.87v-6.066m3.144-18.812l-30.99 9.76"></svg:path>`,
})
export class ArcticonsTimeInternetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
