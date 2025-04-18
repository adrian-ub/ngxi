import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenHeadingFill12Icon],svg[garden-heading-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3 1v10M9 1v10M3 6h6"></svg:path>`,
})
export class GardenHeadingFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
