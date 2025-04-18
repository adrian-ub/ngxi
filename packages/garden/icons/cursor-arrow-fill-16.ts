import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCursorArrowFill16Icon],svg[garden-cursor-arrow-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.22 10.513l4.637 4.637a.5.5 0 0 1-.707.707l-4.637-4.637l-2.115 4.23a1 1 0 0 1-1.801-.025l-6.5-14C-.296.579.579-.295 1.425.097l14 6.5a1 1 0 0 1 .026 1.801z"></svg:path>`,
})
export class GardenCursorArrowFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
