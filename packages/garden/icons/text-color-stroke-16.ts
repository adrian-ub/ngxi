import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenTextColorStroke16Icon],svg[garden-text-color-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3.5 11.5l4-10l4 10M5 8.5h5"></svg:path><svg:path fill="currentColor" d="M2 13h11v3H2z"></svg:path>`,
})
export class GardenTextColorStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
