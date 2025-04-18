import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenHomeFill12Icon],svg[garden-home-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12H8.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-.5.5H2a1 1 0 0 1-1-1V6.995a1.05 1.05 0 0 1-.879-.637a.95.95 0 0 1 .228-1.054L5.221.331a1.09 1.09 0 0 1 1.558 0l4.88 4.981a.95.95 0 0 1 .22 1.046a1.05 1.05 0 0 1-.879.637V11a1 1 0 0 1-1 1"></svg:path>`,
})
export class GardenHomeFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
