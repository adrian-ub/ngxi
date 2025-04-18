import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenNumberStroke16Icon],svg[garden-number-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" d="M2.1 5.5H15m-14.1 5h13m-1.9-9l-3 13m-2-13l-3 13"></svg:path>`,
})
export class GardenNumberStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
