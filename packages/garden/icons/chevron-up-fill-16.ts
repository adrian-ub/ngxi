import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronUpFill16Icon],svg[garden-chevron-up-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.625 10.78a1 1 0 0 1-1.343-1.476l.093-.085l5-4a1 1 0 0 1 1.147-.072l.103.072l5 4a1 1 0 0 1-1.147 1.634l-.103-.072L8 7.28z"></svg:path>`,
})
export class GardenChevronUpFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
