import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleArrowMoveDownLeftIcon],svg[hugeicons-circle-arrow-move-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M10.374 12.532c-.508.63-1.541 1.41-1.357 1.781m0 0c-.103.378.897 1.125 1.36 1.695m-1.36-1.695c2.083.045 3.357-.207 4.587-1.431c1.281-1.276 1.492-2.67 1.388-4.879"></svg:path></svg:g>`,
})
export class HugeiconsCircleArrowMoveDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
