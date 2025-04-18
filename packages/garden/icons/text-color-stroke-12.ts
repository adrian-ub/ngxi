import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenTextColorStroke12Icon],svg[garden-text-color-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m2.5 8.5l3-7l3 7m-5-2h4"></svg:path><svg:path fill="currentColor" d="M2 10h7v2H2z"></svg:path>`,
})
export class GardenTextColorStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
