import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAnythingtopipIcon],svg[arcticons-anythingtopip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.601 30.483a82.5 82.5 0 0 1-11.238-.86a75.5 75.5 0 0 1 0-23.147a75.4 75.4 0 0 1 23.145 0a63.4 63.4 0 0 1 .861 10.775"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.637 41.524a75.4 75.4 0 0 1-23.145 0a75.5 75.5 0 0 1 0-23.146a75.4 75.4 0 0 1 23.145 0a75.5 75.5 0 0 1 0 23.146"></svg:path>`,
})
export class ArcticonsAnythingtopipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
