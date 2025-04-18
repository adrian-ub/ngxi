import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStackOverflowLineIcon],svg[ri-stack-overflow-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.001 20.003V15h2v7.003h-16V15h2v5.003zM7.501 18v-2h9v2zm.077-4.38l.347-1.97l8.864 1.563l-.348 1.97zm1.634-5.504l1-1.732l7.794 4.5l-1 1.732zm3.417-4.613l1.532-1.285l5.785 6.894l-1.532 1.286z"></svg:path>`,
})
export class RiStackOverflowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
