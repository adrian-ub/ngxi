import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAlignJustifyStroke16Icon],svg[garden-align-justify-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 10a.5.5 0 0 1 0-1h13a.5.5 0 1 1 0 1zm0-8a.5.5 0 0 1 0-1h13a.5.5 0 1 1 0 1zm0 4a.5.5 0 0 1 0-1h13a.5.5 0 1 1 0 1zm0 8a.5.5 0 1 1 0-1h13a.5.5 0 1 1 0 1z"></svg:path>`,
})
export class GardenAlignJustifyStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
