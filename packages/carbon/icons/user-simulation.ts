import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonUserSimulationIcon],svg[carbon-user-simulation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m26 12l3.464 2l-1 1.732l-3.464-2zm0-4h4v2h-4zM7 13.732l-3.464 2l-1-1.732L6 12zM26 30h-2v-5a5.006 5.006 0 0 0-5-5h-6a5.006 5.006 0 0 0-5 5v5H6v-5a7.01 7.01 0 0 1 7-7h6a7.01 7.01 0 0 1 7 7zM16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m9 2.268l3.464-2l1 1.732L26 6zM2 8h4v2H2zm4-2L2.536 4l1-1.732l3.464 2z"></svg:path>`,
})
export class CarbonUserSimulationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
