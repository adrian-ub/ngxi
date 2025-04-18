import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenArrangeContent26Icon],svg[garden-arrange-content-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14v-2a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1m-3 6v-2.16a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1M4 8.16V6a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v2.17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1"></svg:path>`,
})
export class GardenArrangeContent26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
