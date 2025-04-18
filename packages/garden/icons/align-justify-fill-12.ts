import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAlignJustifyFill12Icon],svg[garden-align-justify-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zm0-3a1 1 0 1 1 0-2h8a1 1 0 0 1 0 2zm0-3a1 1 0 1 1 0-2h8a1 1 0 0 1 0 2zm0-3a1 1 0 1 1 0-2h8a1 1 0 0 1 0 2z"></svg:path>`,
})
export class GardenAlignJustifyFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
