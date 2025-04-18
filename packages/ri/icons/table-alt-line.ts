import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTableAltLineIcon],svg[ri-table-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 13H4v3h16zM8 5H4v9h4zm6 0h-4v9h4zm6 0h-4v9h4z"></svg:path>`,
})
export class RiTableAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
