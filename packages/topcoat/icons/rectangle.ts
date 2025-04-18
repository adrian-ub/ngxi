import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatRectangleIcon],svg[topcoat-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 4.5h40v33H.5z"></svg:path>`,
})
export class TopcoatRectangleIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
