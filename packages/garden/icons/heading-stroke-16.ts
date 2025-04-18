import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenHeadingStroke16Icon],svg[garden-heading-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M2.5 1.5v14m10-14v14m-10-7h10"></svg:path>`,
})
export class GardenHeadingStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
