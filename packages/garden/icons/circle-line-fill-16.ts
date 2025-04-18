import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCircleLineFill16Icon],svg[garden-circle-line-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15a7 7 0 0 1-6.929-5.999h13.858A7 7 0 0 1 8 15M8 1a7 7 0 0 1 6.93 6H1.07A7 7 0 0 1 8 1"></svg:path>`,
})
export class GardenCircleLineFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
