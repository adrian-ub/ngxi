import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodToastBreadToastBreakfastIcon],svg[streamline-food-toast-bread-toast-breakfast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 3A2.5 2.5 0 0 0 11 .5H3A2.5 2.5 0 0 0 1.5 5v7.5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V5a2.49 2.49 0 0 0 1-2Zm-5 .5l-4 4m5-1l-4 4"></svg:path>`,
})
export class StreamlineFoodToastBreadToastBreakfastIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
