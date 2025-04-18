import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatRectangleOutlineIcon],svg[topcoat-rectangle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 4.5v33h40v-33zm3 3h34v27h-34z"></svg:path>`,
})
export class TopcoatRectangleOutlineIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
