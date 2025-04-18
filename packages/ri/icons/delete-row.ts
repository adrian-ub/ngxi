import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDeleteRowIcon],svg[ri-delete-row-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1a5 5 0 1 1-8 0H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm-7 10v2h6v-2zm6-8H5v4h14z"></svg:path>`,
})
export class RiDeleteRowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
