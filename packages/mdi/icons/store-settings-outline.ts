import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStoreSettingsOutlineIcon],svg[mdi-store-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H4V4h16zm1 6v2h-1v6h-2v-6h-4v6H4v-6H3v-2l1-5h16zm-9 2H6v4h6zm6.96-2l-.6-3H5.64l-.6 3zM7 24h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2z"></svg:path>`,
})
export class MdiStoreSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
