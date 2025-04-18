import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRectangleIcon],svg[mdi-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v13h16V6z"></svg:path>`,
})
export class MdiRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
