import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBookmarkStroke16Icon],svg[garden-bookmark-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12.111L3 16V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14zm-4 1.844l4-3.11l4 3.11V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1z"></svg:path>`,
})
export class GardenBookmarkStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
