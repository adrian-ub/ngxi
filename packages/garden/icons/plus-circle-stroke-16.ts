import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPlusCircleStroke16Icon],svg[garden-plus-circle-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7.5" cy="8.5" r="7" fill="none" stroke="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M7.5 4.5v8m4-4h-8"></svg:path>`,
})
export class GardenPlusCircleStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
