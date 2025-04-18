import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siFlowParallelLineIcon],svg[si-flow-parallel-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M7 16a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V8m0 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V8m0 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class SiFlowParallelLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
