import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBookmarkFill12Icon],svg[garden-bookmark-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10L6 9.083L2 12z"></svg:path>`,
})
export class GardenBookmarkFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
