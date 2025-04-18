import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDebugBreakpointDataUnverifiedIcon],svg[codicon-debug-breakpoint-data-unverified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.931 4h-4.62l-2.31 4l2.31 4h4.62l2.31-4zm-.75 6.7h-3.12L4.501 8l1.56-2.7h3.12l1.56 2.7z"></svg:path>`,
})
export class CodiconDebugBreakpointDataUnverifiedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
