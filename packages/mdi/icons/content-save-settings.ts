import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiContentSaveSettingsIcon],svg[mdi-content-save-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8V4H5v4zm-3 10a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3m5-16l4 4v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm-6 20h2v2h-2zm-4 0h2v2H7zm8 0h2v2h-2z"></svg:path>`,
})
export class MdiContentSaveSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
