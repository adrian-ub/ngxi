import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTableAltFillIcon],svg[ri-table-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14V3H3a1 1 0 0 0-1 1v10zm8 0V3H9v11zm7 0V4a1 1 0 0 0-1-1h-4v11zm-1 7a1 1 0 0 0 1-1v-4H2v4a1 1 0 0 0 1 1z"></svg:path>`,
})
export class RiTableAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
