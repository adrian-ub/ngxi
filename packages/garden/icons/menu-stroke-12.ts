import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMenuStroke12Icon],svg[garden-menu-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M1.5 2.5h9m-9 3h9m-9 3h9"></svg:path>`,
})
export class GardenMenuStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
