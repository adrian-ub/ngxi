import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMarkupStroke12Icon],svg[garden-markup-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M3.5 4L1.9 5.6c-.2.2-.2.5 0 .7L3.5 8m5-4l1.6 1.6c.2.2.2.5 0 .7L8.5 8M7 2.5l-2 7"></svg:path>`,
})
export class GardenMarkupStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
