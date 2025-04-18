import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewArrayOutlineIcon],svg[mdi-view-array-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7v9h-5V7zm6-2h-3v13h3zm-4 0H8v13h9zM7 5H4v13h3z"></svg:path>`,
})
export class MdiViewArrayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
