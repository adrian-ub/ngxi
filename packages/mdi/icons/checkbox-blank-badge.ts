import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCheckboxBlankBadgeIcon],svg[mdi-checkbox-blank-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 4.5C23 6.43 21.43 8 19.5 8S16 6.43 16 4.5S17.57 1 19.5 1S23 2.57 23 4.5M19.5 10A5.51 5.51 0 0 1 14 4.5c0-.5.08-1 .21-1.5H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V9.79c-.5.13-1 .21-1.5.21"></svg:path>`,
})
export class MdiCheckboxBlankBadgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
