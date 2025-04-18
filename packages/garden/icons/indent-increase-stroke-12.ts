import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenIndentIncreaseStroke12Icon],svg[garden-indent-increase-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m1.5 3.5l2.1 2.1c.2.2.2.5 0 .7L1.5 8.5m9-7h-9m9 3h-5m5 3h-5m5 3h-9"></svg:path>`,
})
export class GardenIndentIncreaseStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
