import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siFlowParallelFillIcon],svg[si-flow-parallel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 8.83a3.001 3.001 0 1 0-2 0v6.34a3.001 3.001 0 1 0 2 0zM7 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2m9-1.83V8.83a3.001 3.001 0 1 1 2 0v6.34a3.001 3.001 0 1 1-2 0M16 18a1 1 0 1 1 2 0a1 1 0 0 1-2 0m1-13a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class SiFlowParallelFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
