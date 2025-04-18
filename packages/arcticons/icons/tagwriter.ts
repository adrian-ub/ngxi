import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTagwriterIcon],svg[arcticons-tagwriter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39 18.62L19.81 37.79v3h3L42 21.63l-3-3m-1.85 1.82l3 3M6.21 37A3.81 3.81 0 0 1 10 40.8h0M6.21 27.22A13.58 13.58 0 0 1 19.79 40.8h0M6.21 32.2a8.61 8.61 0 0 1 8.61 8.6"></svg:path><svg:circle cx="17.17" cy="12.04" r="1.76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28 35.6v5.2H6.21V14.35l10.9-7.15L28 14.35v15.18m-5.27 5.34l3.01 3.01"></svg:path>`,
})
export class ArcticonsTagwriterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
