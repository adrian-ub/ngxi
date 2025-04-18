import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenTextStroke12Icon],svg[garden-text-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M2.5 1.5h6m-3 0v10"></svg:path>`,
})
export class GardenTextStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
