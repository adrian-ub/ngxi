import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBoldFill12Icon],svg[garden-bold-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.9 0c1.96 0 3.6 1.554 3.6 3.5a3.42 3.42 0 0 1-.86 2.265A3.45 3.45 0 0 1 10 8.5c0 1.946-1.64 3.5-3.6 3.5H3a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zM4 10h2.4C7.279 10 8 9.317 8 8.5S7.279 7 6.4 7H4zm1.9-8H4v3h1.9c.879 0 1.6-.683 1.6-1.5S6.779 2 5.9 2"></svg:path>`,
})
export class GardenBoldFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
