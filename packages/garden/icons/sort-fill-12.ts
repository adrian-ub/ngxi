import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSortFill12Icon],svg[garden-sort-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5H2a.5.5 0 0 1-.46-.31a.47.47 0 0 1 .11-.54L5.29.5A1 1 0 0 1 6.7.5l3.65 3.65a.49.49 0 0 1 .11.54A.51.51 0 0 1 10 5M2 7a.5.5 0 0 0-.46.31a.47.47 0 0 0 .11.54L5.3 11.5a1 1 0 0 0 1.41 0l3.65-3.65a.49.49 0 0 0 .11-.54A.53.53 0 0 0 10 7z"></svg:path>`,
})
export class GardenSortFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
