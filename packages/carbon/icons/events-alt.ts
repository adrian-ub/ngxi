import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonEventsAltIcon],svg[carbon-events-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 31h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3.003 3.003 0 0 0-3-3h-6a3.003 3.003 0 0 0-3 3zm6-6a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.003 2.003 0 0 0-2-2M2 31h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3.003 3.003 0 0 0-3-3H5a3.003 3.003 0 0 0-3 3zm6-6a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m10-3h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3.003 3.003 0 0 0-3-3h-6a3.003 3.003 0 0 0-3 3zm6-6a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2M2 16h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3.003 3.003 0 0 0-3-3H5a3.003 3.003 0 0 0-3 3zm6-6a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonEventsAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
