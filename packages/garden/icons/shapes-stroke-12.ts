import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenShapesStroke12Icon],svg[garden-shapes-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm5.25-.5a2.75 2.75 0 1 1 0 5.5a2.75 2.75 0 0 1 0-5.5M4 8H1v3h3zm5.25-.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M6.832.445l2 3A1 1 0 0 1 8 5H4a1 1 0 0 1-.832-1.555l2-3a1 1 0 0 1 1.664 0M6 1L4 4h4z"></svg:path>`,
})
export class GardenShapesStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
