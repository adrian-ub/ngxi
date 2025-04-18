import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineSyncAltIcon],svg[ic-outline-sync-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.41 13.41L6 12l-4 4l4 4l1.41-1.41L5.83 17H21v-2H5.83zm9.18-2.82L18 12l4-4l-4-4l-1.41 1.41L18.17 7H3v2h15.17z"></svg:path>`,
})
export class IcOutlineSyncAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
