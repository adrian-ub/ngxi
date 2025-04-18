import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBookClosedStroke16Icon],svg[garden-book-closed-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M2.5 1.5s0-1 1-1H12s.5 0 .5.5v1.5m1 12.5c0 .3-.2.5-.5.5H3.5s-1 0-1-1v-13s0 1 1 1H13c.3 0 .5.2.5.5zm-8-5.5h5m-5-3h5"></svg:path>`,
})
export class GardenBookClosedStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
