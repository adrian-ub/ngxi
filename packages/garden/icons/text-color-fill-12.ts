import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenTextColorFill12Icon],svg[garden-text-color-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 8l3-7l3 7M4 6h4"></svg:path><svg:path fill="currentColor" d="M2 10h8v2H2z"></svg:path>`,
})
export class GardenTextColorFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
