import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronDownFill16Icon],svg[garden-chevron-down-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.375 5.22a1 1 0 0 1 1.343 1.476l-.093.085l-5 4a1 1 0 0 1-1.147.072l-.103-.072l-5-4a1 1 0 0 1 1.147-1.634l.103.072L8 8.72z"></svg:path>`,
})
export class GardenChevronDownFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
