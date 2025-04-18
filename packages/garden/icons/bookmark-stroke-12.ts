import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBookmarkStroke12Icon],svg[garden-bookmark-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9.083L10 12V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10zm-3 .95V2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8.033L6 7.846z"></svg:path>`,
})
export class GardenBookmarkStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
