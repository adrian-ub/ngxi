import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCheckboxBlankBadgeOutlineIcon],svg[mdi-checkbox-blank-badge-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 4.5C23 6.43 21.43 8 19.5 8S16 6.43 16 4.5S17.57 1 19.5 1S23 2.57 23 4.5M19.5 10H19v9H5V5h9.03C14 4.84 14 4.67 14 4.5c0-.5.08-1 .21-1.5H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V9.79c-.5.13-1 .21-1.5.21"></svg:path>`,
})
export class MdiCheckboxBlankBadgeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
