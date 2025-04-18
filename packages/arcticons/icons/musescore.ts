import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMusescoreIcon],svg[arcticons-musescore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:circle cx="33" cy="20.4" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 25.35v7.2m0-7.2a4.513 4.513 0 0 1 4.5-4.5h0a4.513 4.513 0 0 1 4.5 4.5m0 0v2.925a4.513 4.513 0 0 0 4.5 4.5h.001a4.51 4.51 0 0 0 4.499-4.5V23.1m-18 2.25a4.513 4.513 0 0 0-4.5-4.5h0a4.513 4.513 0 0 0-4.5 4.5v7.2m18-12.825a4.513 4.513 0 0 1 4.5-4.5h.001a4.51 4.51 0 0 1 4.5 4.5"></svg:path>`,
})
export class ArcticonsMusescoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
