import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenArrowLeftUpFill12Icon],svg[garden-arrow-left-up-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7.5a.5.5 0 0 1-.788.41l-.066-.056l-3-3a.5.5 0 0 1-.057-.638l.057-.07l3-3a.5.5 0 0 1 .847.268L4 1.5V4h1.5a6.5 6.5 0 0 1 6.5 6.5a.5.5 0 1 1-1 0a5.5 5.5 0 0 0-5.279-5.496L5.5 5H4z"></svg:path>`,
})
export class GardenArrowLeftUpFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
