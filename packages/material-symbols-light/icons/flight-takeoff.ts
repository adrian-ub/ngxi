import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFlightTakeoffIcon],svg[material-symbols-light-flight-takeoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-1h16v1zm1.327-4.923L2.231 9.904l1.458-.381l2.665 2.273l4.135-1.079l-4.926-6.611l1.862-.487l7.11 6.025l4.269-1.13q.569-.148 1.09.158q.52.307.668.876t-.12 1.09t-.838.668z"></svg:path>`,
})
export class MaterialSymbolsLightFlightTakeoffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
