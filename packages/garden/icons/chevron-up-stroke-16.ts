import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronUpStroke16Icon],svg[garden-chevron-up-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.312 10.39a.5.5 0 0 1-.69-.718l.066-.062l5-4a.5.5 0 0 1 .542-.054l.082.054l5 4a.5.5 0 0 1-.55.83l-.074-.05L8 6.641z"></svg:path>`,
})
export class GardenChevronUpStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
