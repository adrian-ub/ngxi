import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowMoveDownRightIcon],svg[hugeicons-circle-arrow-move-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M13.631 12.525c.509.63 1.541 1.411 1.358 1.782m0 0c.102.378-.898 1.125-1.36 1.695m1.36-1.695c-2.083.045-3.357-.207-4.588-1.432c-1.28-1.275-1.491-2.67-1.388-4.878"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowMoveDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
