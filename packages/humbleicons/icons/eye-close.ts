import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsEyeCloseIcon],svg[humbleicons-eye-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10a13.4 13.4 0 0 0 3 2.685M21 10a13.4 13.4 0 0 1-3 2.685m-8 1.624L9.5 16.5m.5-2.19a10.6 10.6 0 0 0 4 0m-4 0a11.3 11.3 0 0 1-4-1.625m8 1.624l.5 2.191m-.5-2.19a11.3 11.3 0 0 0 4-1.625m0 0l1.5 1.815M6 12.685L4.5 14.5"></svg:path>`,
})
export class HumbleiconsEyeCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
