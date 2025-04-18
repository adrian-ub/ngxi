import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAtStroke12Icon],svg[garden-at-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M8.5 3.5V6h0A2.5 2.5 0 0 1 6 8.5h0A2.5 2.5 0 0 1 3.5 6h0A2.5 2.5 0 0 1 6 3.5h0A2.5 2.5 0 0 1 8.5 6h0v1A1.5 1.5 0 0 0 10 8.5h0A1.5 1.5 0 0 0 11.5 7V6h0A5.5 5.5 0 0 0 6 .5h0A5.5 5.5 0 0 0 .5 6h0A5.5 5.5 0 0 0 6 11.5h2.5"></svg:path>`,
})
export class GardenAtStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
