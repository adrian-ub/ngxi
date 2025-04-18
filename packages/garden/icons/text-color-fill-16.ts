import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenTextColorFill16Icon],svg[garden-text-color-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 11L8 1l4 10M5.5 8h5"></svg:path><svg:path fill="currentColor" d="M2 13h12v3H2z"></svg:path>`,
})
export class GardenTextColorFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
