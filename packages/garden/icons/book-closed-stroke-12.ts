import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBookClosedStroke12Icon],svg[garden-book-closed-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M10.5 11c0 .3-.2.5-.5.5H2.5s-1 0-1-1v-9s0 1 1 1H10c.3 0 .5.2.5.5zm-9-9.5s0-1 1-1H9s.5 0 .5.5v1.5m-5 3h3m-3 2h3"></svg:path>`,
})
export class GardenBookClosedStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
