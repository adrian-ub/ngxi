import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookSettingsIcon],svg[mdi-book-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2v16c0 1.11-.89 2-2 2H6c-1.11 0-2-.89-2-2V2c0-1.105.89-2 2-2h1v7l2.5-1.5L12 7V0h6a2 2 0 0 1 2 2M7 24h2v-2H7zm8 0h2v-2h-2zm-4 0h2v-2h-2z"></svg:path>`,
})
export class MdiBookSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
