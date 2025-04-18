import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsSnapshotRollbackIcon],svg[eos-icons-snapshot-rollback-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v4h2V4h4V2Zm12 0v2h4v4h2V4a2 2 0 0 0-2-2Zm0 20v-2h4v-4h2v4a2 2 0 0 1-2 2ZM4 20v-4H2v4a2 2 0 0 0 2 2h4v-2Zm8.37-10.48A6 6 0 0 0 8 11.45L6 9.5v5h5l-2-2a4.48 4.48 0 0 1 7.6 1.5l1.4-.44a6 6 0 0 0-5.63-4.04"></svg:path>`,
})
export class EosIconsSnapshotRollbackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
