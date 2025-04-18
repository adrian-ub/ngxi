import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCutleryStroke12Icon],svg[garden-cutlery-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M.5 3.5h4v-3v5a2 2 0 1 1-4 0v-5zm2 8v-4zm0-8v-3zm8-3v11h-1v-4h1h-3v-4a3 3 0 0 1 3-3z"></svg:path>`,
})
export class GardenCutleryStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
