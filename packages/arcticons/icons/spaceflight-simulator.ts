import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSpaceflightSimulatorIcon],svg[arcticons-spaceflight-simulator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.433 10.227l3.17 3.17l-25.358 25.356l-3.17-3.17z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.433 10.226l4.391-1.9a.566.566 0 0 1 .74.753l-1.962 4.317M24.639 27.36l3.169 3.17l-12.679 12.678l-3.169-3.17zm0 0l4.391-1.901a.566.566 0 0 1 .74.754l-1.962 4.316M18.3 21.02l3.169 3.17L8.79 36.867l-3.169-3.17zm0 0l4.39-1.9a.566.566 0 0 1 .741.753L21.47 24.19M6.74 34.818l-3.123 1.757l2.297 2.297l1.757-3.123"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.079 41.157l-3.123 1.757l2.298 2.298l1.757-3.123m-2.724-5.294l-2.988 1.893l1.842 1.841l1.893-2.987"></svg:path>`,
})
export class ArcticonsSpaceflightSimulatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
