import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSmartSyncIcon],svg[arcticons-smart-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="20.761" cy="20.761" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="15.54" ry="13.522" transform="rotate(-45 20.761 20.761)"></svg:ellipse><svg:ellipse cx="22.381" cy="22.381" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="18.172" ry="15.812" transform="rotate(-45 22.38 22.38)"></svg:ellipse><svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="20.804" ry="18.102" transform="rotate(-45 24 24)"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.168 34.045l-6.856-6.089"></svg:path>`,
})
export class ArcticonsSmartSyncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
