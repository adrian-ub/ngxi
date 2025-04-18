import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMarkupStroke16Icon],svg[garden-markup-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m12 5.5l2.1 2.1c.2.2.2.5 0 .7L12 10.5m-8-5L1.9 7.6c-.2.2-.2.5 0 .7L4 10.5M10 3L6 13"></svg:path>`,
})
export class GardenMarkupStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
