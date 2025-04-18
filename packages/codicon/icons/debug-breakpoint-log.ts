import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDebugBreakpointLogIcon],svg[codicon-debug-breakpoint-log-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 3l5 5l-5 5l-5-5z"></svg:path>`,
})
export class CodiconDebugBreakpointLogIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
