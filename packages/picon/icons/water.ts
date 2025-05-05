import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWaterIcon],svg[picon-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6Q6 4 4 6Q2 4 0 6V5q2-2 4 0q2-2 4 0m0 3Q6 6 4 8Q2 6 0 8V7q2-2 4 0q2-2 4 0"></svg:path>`,
})
export class PiconWaterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
