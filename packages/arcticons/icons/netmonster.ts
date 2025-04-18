import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNetmonsterIcon],svg[arcticons-netmonster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24.273" cy="19.535" r="2.376" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.186 34.085A15.677 15.677 0 0 1 19.526 4.5m9.435.152a15.678 15.678 0 0 1 1.286 29.251"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.597 29.266a9.502 9.502 0 0 1 1.418-18.134m4.481.098a9.502 9.502 0 0 1 1.375 17.883"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.273 21.91L14.77 40.916a18.76 18.76 0 0 0 19.004 0Z"></svg:path>`,
})
export class ArcticonsNetmonsterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
