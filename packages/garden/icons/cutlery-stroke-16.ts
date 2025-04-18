import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCutleryStroke16Icon],svg[garden-cutlery-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6.5.5v7a2 2 0 1 1-4 0v-7v4h4zm-2 4v-4zm0 11v-6zm9-15v15h-1v-5h1h-4v-6a4 4 0 0 1 4-4z"></svg:path>`,
})
export class GardenCutleryStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
