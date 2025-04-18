import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenBookmarkFill16Icon],svg[garden-bookmark-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14l-5-3.889L3 16z"></svg:path>`,
})
export class GardenBookmarkFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
