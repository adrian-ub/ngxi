import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSortFill16Icon],svg[garden-sort-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.71 1.71l4.44 4.44a.5.5 0 0 1-.36.85H3.21a.5.5 0 0 1-.36-.85l4.44-4.44a1 1 0 0 1 1.42 0m0 12.58l4.44-4.44a.5.5 0 0 0 0-.71a.48.48 0 0 0-.35-.14H3.21a.49.49 0 0 0-.35.85l4.44 4.44a1 1 0 0 0 1.41 0"></svg:path>`,
})
export class GardenSortFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
