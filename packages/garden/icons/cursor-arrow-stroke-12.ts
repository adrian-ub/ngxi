import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCursorArrowStroke12Icon],svg[garden-cursor-arrow-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.584 8.291l-1.148 3.06c-.313.836-1.482.873-1.848.06l-4.5-10C-.29.57.571-.29 1.41.087l10 4.5c.814.366.777 1.535-.059 1.848l-3.06 1.148l3.563 3.562a.5.5 0 0 1-.708.708L7.584 8.29zM5.5 11L7 7l4-1.5L1 1z"></svg:path>`,
})
export class GardenCursorArrowStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
