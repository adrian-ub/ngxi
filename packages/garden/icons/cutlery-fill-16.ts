import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCutleryFill16Icon],svg[garden-cutlery-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4V.5a.5.5 0 0 1 1 0V4h1V.5a.5.5 0 0 1 1 0v7a2.5 2.5 0 0 1-2 2.45v5.55a.5.5 0 1 1-1 0V9.95A2.5 2.5 0 0 1 2 7.5v-7a.5.5 0 0 1 1 0V4zm6 7a1 1 0 0 1-1-1V4a4 4 0 0 1 4-4a1 1 0 0 1 1 1v14c0 1.333-2 1.333-2 0v-4z"></svg:path>`,
})
export class GardenCutleryFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
