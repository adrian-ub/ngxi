import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenHeadingFill16Icon],svg[garden-heading-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M3 1v14M13 1v14M3 8h10"></svg:path>`,
})
export class GardenHeadingFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
