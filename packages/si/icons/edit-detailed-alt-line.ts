import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siEditDetailedAltLineIcon],svg[si-edit-detailed-alt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14.828 6.343l2.829 2.829m1.414-1.415L8.464 18.364l-3.535.707l.707-3.536L16.243 4.93a2 2 0 0 1 2.828 2.828Z"></svg:path>`,
})
export class SiEditDetailedAltLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
