import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLeafStroke16Icon],svg[garden-leaf-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="m11.5 4.5l-11 11l3-3v-6c0-3.314 4-6 11.5-6a.5.5 0 0 1 .5.5c0 7.5-2.686 11.5-6 11.5h-6zm-4 4H11zm0-3.5v3.5z"></svg:path>`,
})
export class GardenLeafStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
