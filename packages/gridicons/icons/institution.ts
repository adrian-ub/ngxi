import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsInstitutionIcon],svg[gridicons-institution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19h20v3H2zM12 2L2 6v2h20V6zm5 8h3v7h-3zm-6.5 0h3v7h-3zM4 10h3v7H4z"></svg:path>`,
})
export class GridiconsInstitutionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
