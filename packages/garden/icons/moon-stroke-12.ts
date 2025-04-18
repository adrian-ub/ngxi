import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMoonStroke12Icon],svg[garden-moon-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6 10.5a4.5 4.5 0 0 1-3.746-2.006a5.5 5.5 0 0 0 5.093-6.79A4.5 4.5 0 0 1 6 10.5Z"></svg:path>`,
})
export class GardenMoonStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
