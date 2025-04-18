import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUnivCoopIcon],svg[arcticons-univ-coop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18.175" cy="25.6" r="5.542" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="25.853" cy="35.272" r="5.844" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="29.523" cy="23.164" r="5.844" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.207 12.682c-.356 3.531-3.183 6.323-6.754 6.67s-6.892-1.849-7.935-5.245s.484-7.048 3.647-8.724s7.082-.91 9.363 1.83m-6.519 28.261V43.5"></svg:path>`,
})
export class ArcticonsUnivCoopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
