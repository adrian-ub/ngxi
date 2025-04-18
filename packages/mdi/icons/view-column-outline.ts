import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewColumnOutlineIcon],svg[mdi-view-column-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v13h17V5zm10 2v9h-3V7zM6 7h3v9H6zm13 9h-3V7h3z"></svg:path>`,
})
export class MdiViewColumnOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
