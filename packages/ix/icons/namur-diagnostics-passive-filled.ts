import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNamurDiagnosticsPassiveFilledIcon],svg[ix-namur-diagnostics-passive-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85.333 85.333h341.334v341.334H85.333z"></svg:path>`,
})
export class IxNamurDiagnosticsPassiveFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
