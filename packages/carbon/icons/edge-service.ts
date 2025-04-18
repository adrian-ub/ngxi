import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonEdgeServiceIcon],svg[carbon-edge-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11h2v10H7zm4 0h2v10h-2zm4 0h2v10h-2zm4 0h2v10h-2zm4 0h2v10h-2z"></svg:path><svg:path fill="currentColor" d="M28 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2M4 8v16h24V8Z"></svg:path>`,
})
export class CarbonEdgeServiceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
