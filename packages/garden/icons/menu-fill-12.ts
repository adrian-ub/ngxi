import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenMenuFill12Icon],svg[garden-menu-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M2 2h8M2 6h8m-8 4h8"></svg:path>`,
})
export class GardenMenuFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
