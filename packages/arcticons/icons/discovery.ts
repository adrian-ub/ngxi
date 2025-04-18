import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDiscoveryIcon],svg[arcticons-discovery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16.239" cy="28.435" r="11.739" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.24 16.696v-8.87h11.086A16.174 16.174 0 0 1 43.5 24h0a16.174 16.174 0 0 1-16.174 16.174H16.24"></svg:path>`,
})
export class ArcticonsDiscoveryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
