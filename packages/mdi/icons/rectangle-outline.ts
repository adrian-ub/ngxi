import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRectangleOutlineIcon],svg[mdi-rectangle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v13h16V6zm14 11H6V8h12z"></svg:path>`,
})
export class MdiRectangleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
