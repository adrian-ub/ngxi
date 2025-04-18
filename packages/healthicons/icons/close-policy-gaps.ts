import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsClosePolicyGapsIcon],svg[healthicons-close-policy-gaps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23 13V6H7a1 1 0 0 0-1 1v16h5v-1a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h4v-6h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"></svg:path><svg:path d="M6 25h7v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h6v4h-1a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1v5H7a1 1 0 0 1-1-1z"></svg:path><svg:path d="M25 42v-7h-3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3v-6h4v1a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-1h5v16a1 1 0 0 1-1 1z"></svg:path><svg:path d="M42 23V7a1 1 0 0 0-1-1H25v5h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1v4h6v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3z"></svg:path></svg:g>`,
})
export class HealthiconsClosePolicyGapsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
