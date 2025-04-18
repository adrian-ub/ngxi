import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCircleLineStroke12Icon],svg[garden-circle-line-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.584 8a5.001 5.001 0 0 1-9.168 0l1.12.001A4 4 0 0 0 6 10c1.48 0 2.772-.804 3.464-1.999zM11 5a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2zM6 1a5 5 0 0 1 4.584 3h-1.12A4 4 0 0 0 6 2c-1.48 0-2.773.804-3.465 2h-1.12A5 5 0 0 1 6 1"></svg:path>`,
})
export class GardenCircleLineStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
