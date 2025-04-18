import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCarStroke16Icon],svg[garden-car-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M1.5 5.5h13a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1zm2-5h9l2 5h-13zm-2 12h2v2a1 1 0 0 1-2 0zm11 0h2v2a1 1 0 0 1-2 0zM4 8.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1zm8 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class GardenCarStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
