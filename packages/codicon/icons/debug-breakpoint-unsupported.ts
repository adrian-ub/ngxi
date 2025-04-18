import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDebugBreakpointUnsupportedIcon],svg[codicon-debug-breakpoint-unsupported-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.326 10.222a4 4 0 1 0-6.653-4.444a4 4 0 0 0 6.653 4.444M8.65 10H7.4v1h1.25zM7.4 9V5h1.25v4z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconDebugBreakpointUnsupportedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
