import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsRemoteIcon],svg[humbleicons-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14h.01m5.414-7.425A6.99 6.99 0 0 0 12 4a6.99 6.99 0 0 0-5.425 2.575M15 8.355A4 4 0 0 0 12 7a4 4 0 0 0-3 1.354M10 11h4a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1"></svg:path>`,
})
export class HumbleiconsRemoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
