import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFlowIcon],svg[carbon-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 22.14V17a2 2 0 0 0-2-2h-8V9.86a4 4 0 1 0-2 0V15H7a2 2 0 0 0-2 2v5.14a4 4 0 1 0 2 0V17h18v5.14a4 4 0 1 0 2 0M8 26a2 2 0 1 1-2-2a2 2 0 0 1 2 2m6-20a2 2 0 1 1 2 2a2 2 0 0 1-2-2m12 22a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonFlowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
