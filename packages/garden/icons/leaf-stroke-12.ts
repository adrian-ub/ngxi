import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLeafStroke12Icon],svg[garden-leaf-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M2.5 8.5v-3c0-2.606 2.656-4.767 8-5l1.005-.003L11.5 1.5c-.242 5.318-2.4 8-5 8h-4l6-6l-8 8l2-2zm3-4.5v2.5zm0 2.5H8z"></svg:path>`,
})
export class GardenLeafStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
