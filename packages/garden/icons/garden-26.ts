import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenGarden26Icon],svg[garden-garden-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13.5C2 19.302 6.921 24 13 24s11-4.698 11-10.5V3c-6.079 0-11 4.698-11 10.5C13 7.698 8.079 3 2 3z"></svg:path>`,
})
export class GardenGarden26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
