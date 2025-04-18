import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDebugBreakpointLogUnverifiedIcon],svg[codicon-debug-breakpoint-log-unverified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.02 7.98L8 3l4.98 4.98L8 12.96zM8 10.77l2.79-2.79L8 5.19L5.21 7.98z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconDebugBreakpointLogUnverifiedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
