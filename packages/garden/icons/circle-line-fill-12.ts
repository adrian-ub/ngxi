import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCircleLineFill12Icon],svg[garden-circle-line-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11a5 5 0 0 1-4.9-3.999h9.8A5 5 0 0 1 6 11M6 1a5 5 0 0 1 4.9 4H1.1A5 5 0 0 1 6 1"></svg:path>`,
})
export class GardenCircleLineFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
