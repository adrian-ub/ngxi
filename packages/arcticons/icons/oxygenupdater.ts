import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOxygenupdaterIcon],svg[arcticons-oxygenupdater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.945 42.5h36.11M9.19 22.599h7.063v14.224a2.02 2.02 0 0 0 2.022 2.021H29.77a2.02 2.02 0 0 0 2.021-2.021V22.599h7.064a.95.95 0 0 0 .706-1.689L25.435 6.018a2.004 2.004 0 0 0-2.688 0L8.483 20.91c-.755.789-.473 1.688.706 1.688Z"></svg:path>`,
})
export class ArcticonsOxygenupdaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
