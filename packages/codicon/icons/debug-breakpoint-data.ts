import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDebugBreakpointDataIcon],svg[codicon-debug-breakpoint-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.238 8l-2.31 4H5.31L3 8l2.31-4h4.618z"></svg:path>`,
})
export class CodiconDebugBreakpointDataIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
