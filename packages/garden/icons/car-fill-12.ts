import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCarFill12Icon],svg[garden-car-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.11 4L2.015.379A.5.5 0 0 1 2.5 0h7a.5.5 0 0 1 .485.379L10.89 4H11a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v1a1 1 0 0 1-2 0v-1H3v1a1 1 0 0 1-2 0v-1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM3 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m6 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2M2.89 1l-.75 3h7.72l-.75-3z"></svg:path>`,
})
export class GardenCarFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
