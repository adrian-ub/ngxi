import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenIndentDecreaseStroke12Icon],svg[garden-indent-decrease-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M3.5 3.5L1.4 5.6c-.2.2-.2.5 0 .7l2.1 2.1m-2-6.9h9m-5 3h5m-5 3h5m-9 3h9"></svg:path>`,
})
export class GardenIndentDecreaseStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
