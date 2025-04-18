import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronRightStroke16Icon],svg[garden-chevron-right-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.61 3.312a.5.5 0 0 1 .718-.69l.062.066l4 5a.5.5 0 0 1 .054.542l-.054.082l-4 5a.5.5 0 0 1-.83-.55l.05-.074L9.359 8l-3.75-4.688z"></svg:path>`,
})
export class GardenChevronRightStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
