import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDebugBreakpointFunctionUnverifiedIcon],svg[codicon-debug-breakpoint-function-unverified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 11h8L8 4zm2.154-1.25h3.692L8 6.52z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconDebugBreakpointFunctionUnverifiedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
