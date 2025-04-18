import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenArrowLeftUpFill16Icon],svg[garden-arrow-left-up-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10.5a.5.5 0 0 1-.788.41l-.066-.056l-4-4a.5.5 0 0 1-.057-.638l.057-.07l4-4a.5.5 0 0 1 .847.268L5 2.5V6h3.5a7.5 7.5 0 0 1 7.5 7.5a.5.5 0 1 1-1 0a6.5 6.5 0 0 0-6.267-6.496L8.5 7H5z"></svg:path>`,
})
export class GardenArrowLeftUpFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
