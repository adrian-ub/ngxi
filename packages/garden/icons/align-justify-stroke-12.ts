import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAlignJustifyStroke12Icon],svg[garden-align-justify-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 11a.5.5 0 1 1 0-1h9a.5.5 0 1 1 0 1zm0-3a.5.5 0 0 1 0-1h9a.5.5 0 1 1 0 1zm0-3a.5.5 0 0 1 0-1h9a.5.5 0 1 1 0 1zm0-3a.5.5 0 0 1 0-1h9a.5.5 0 1 1 0 1z"></svg:path>`,
})
export class GardenAlignJustifyStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
