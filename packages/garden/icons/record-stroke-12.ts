import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenRecordStroke12Icon],svg[garden-record-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="6" cy="6" r="4" fill="currentColor"></svg:circle>`,
})
export class GardenRecordStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
