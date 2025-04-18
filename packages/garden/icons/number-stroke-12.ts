import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenNumberStroke12Icon],svg[garden-number-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" d="M1.5 4.5H11m-10 3h9.5M8.5 1l-2 10m-1-10l-2 10"></svg:path>`,
})
export class GardenNumberStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
