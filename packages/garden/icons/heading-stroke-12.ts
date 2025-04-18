import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenHeadingStroke12Icon],svg[garden-heading-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M2.5 1.5v10m6-10v10m-6-5h6"></svg:path>`,
})
export class GardenHeadingStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
