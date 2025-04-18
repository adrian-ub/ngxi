import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLoopsAltIcon],svg[arcticons-loops-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="16.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.5 24h5M15.75 38.289l-2.5 4.33m2.5-32.909l-2.5-4.33m7.574 13.12a1.5 1.5 0 0 0-.75 1.299V28.2a1.5 1.5 0 0 0 2.25 1.299l7.277-4.201a1.5 1.5 0 0 0 0-2.598l-7.277-4.2a1.5 1.5 0 0 0-1.5 0"></svg:path>`,
})
export class ArcticonsLoopsAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
