import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenGrid3x3Stroke12Icon],svg[garden-grid-3x3-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M1.5 1.5h9v9h-9zm3 0v9m3-9v9m-6-6h9m-9 3h9"></svg:path>`,
})
export class GardenGrid3x3Stroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
