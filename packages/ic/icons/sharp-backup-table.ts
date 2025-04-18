import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpBackupTableIcon],svg[ic-sharp-backup-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6v14H6v2h16V6z"></svg:path><svg:path fill="currentColor" d="M18 2H2v16h16zM9 16H4v-5h5zm7 0h-5v-5h5zm0-7H4V4h12z"></svg:path>`,
})
export class IcSharpBackupTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
