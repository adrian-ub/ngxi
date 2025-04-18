import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFileErrorStroke16Icon],svg[garden-file-error-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M14.5 4.205V15a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V1A.5.5 0 0 1 2 .5h8.853a.5.5 0 0 1 .356.15l3.148 3.204a.5.5 0 0 1 .143.35zM10.5.5V4a.5.5 0 0 0 .5.5h3.5m-9 8l5-5m0 5l-5-5"></svg:path>`,
})
export class GardenFileErrorStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
