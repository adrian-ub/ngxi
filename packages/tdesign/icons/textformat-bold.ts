import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTextformatBoldIcon],svg[tdesign-textformat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5v18h9a5 5 0 0 0 2.436-9.367A5 5 0 0 0 13 3zm7 8H7V5h6a3 3 0 1 1 0 6m-6 2h7a3 3 0 1 1 0 6H7z"></svg:path>`,
})
export class TdesignTextformatBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
