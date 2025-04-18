import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQuickSettingsIcon],svg[arcticons-quick-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.61 12.98l4.224 4.224l-3.637 3.637l-4.212-4.212a6.58 6.58 0 0 0 1.435 7.104a6.58 6.58 0 0 0 7.11 1.44L31.855 35.5l3.639-3.636l-10.332-10.332a6.58 6.58 0 0 0-1.436-7.105a6.58 6.58 0 0 0-7.118-1.447Z"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsQuickSettingsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
