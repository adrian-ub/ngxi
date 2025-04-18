import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneBackupTableIcon],svg[ic-twotone-backup-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11h5v5h-5zm-7 0h5v5H4zm0-7h12v5H4z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M20 6v14H6v2h14c1.1 0 2-.9 2-2V6z"></svg:path><svg:path fill="currentColor" d="M18 16V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2M4 4h12v5H4zm5 12H4v-5h5zm2-5h5v5h-5z"></svg:path>`,
})
export class IcTwotoneBackupTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
