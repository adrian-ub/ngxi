import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsSkipBackwardIcon],svg[humbleicons-skip-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5.5v13m3.48-5.636l9.016 5.259A1 1 0 0 0 19 17.259V6.741a1 1 0 0 0-1.504-.864l-9.015 5.26a1 1 0 0 0 0 1.727Z"></svg:path>`,
})
export class HumbleiconsSkipBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
