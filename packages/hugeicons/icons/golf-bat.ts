import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGolfBatIcon],svg[hugeicons-golf-bat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.471 17.263L12 20.974c-.38.39-.745.79-1.282.947c-.27.079-.558.079-1.136.079H6.646c-1.522 0-2.95-.486-3.487-2.065c-.505-1.484.193-3.946 2.08-3.935c.696.004 1.208.424 2.232 1.263M12 21l4.5-11m1.12-6.577L16.134 9a.635.635 0 0 0 1.165.479l2.864-5.012a1.385 1.385 0 1 0-2.541-1.044" color="currentColor"></svg:path>`,
})
export class HugeiconsGolfBatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
