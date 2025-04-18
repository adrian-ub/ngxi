import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNtfyIcon],svg[arcticons-ntfy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.719 7.784a4.483 4.483 0 0 0-4.49 4.496v20.185a4.5 4.5 0 0 0 .166 1.202L4.5 40.216l12.294-3.255H39.01a4.483 4.483 0 0 0 4.49-4.496V12.28a4.483 4.483 0 0 0-4.49-4.496Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.227 27.878l10.282-5.945l-10.282-5.945m13.139 13.094h10.96"></svg:path>`,
})
export class ArcticonsNtfyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
