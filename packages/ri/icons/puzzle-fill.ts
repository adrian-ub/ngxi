import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPuzzleFillIcon],svg[ri-puzzle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a3 3 0 1 1 5.83 1H18a1 1 0 0 1 1 1v4.17a3 3 0 1 1 0 5.659V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.17C8.06 4.687 8 4.35 8 4"></svg:path>`,
})
export class RiPuzzleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
