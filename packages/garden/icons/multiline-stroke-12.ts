import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMultilineStroke12Icon],svg[garden-multiline-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M1.5 4.5h9m-9-3h9m-9 6h9m-9 3h4"></svg:path>`,
})
export class GardenMultilineStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
