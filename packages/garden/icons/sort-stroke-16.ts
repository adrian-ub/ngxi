import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSortStroke16Icon],svg[garden-sort-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m3 6.5l4.6-4.6a.48.48 0 0 1 .7 0L13 6.5m-10 3l4.6 4.6a.48.48 0 0 0 .7 0l4.6-4.6"></svg:path>`,
})
export class GardenSortStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
