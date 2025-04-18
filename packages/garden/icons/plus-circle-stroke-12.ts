import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPlusCircleStroke12Icon],svg[garden-plus-circle-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="5.5" cy="6.5" r="5" fill="none" stroke="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M5.5 3.5v6m3-3h-6"></svg:path>`,
})
export class GardenPlusCircleStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
