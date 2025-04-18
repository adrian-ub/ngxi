import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMinistryOfHealthOutlineIcon],svg[healthicons-ministry-of-health-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M25 16v-2h2v-2h-2v-2h-2v2h-2v2h2v2z"></svg:path><svg:path fill-rule="evenodd" d="M24.625 5.22a1 1 0 0 0-1.25 0L8.65 17H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v10H7a1 1 0 0 0-1 1v3H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h38a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1v-3a1 1 0 0 0-1-1h-1V23h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1.65zM36.149 17L24 7.28L11.85 17zM8 19v2h32v-2zm30 4h-2v10h2zm-4 10V23H14v10h1a1 1 0 0 1 1 1v3h4v-8a4 4 0 0 1 8 0v8h4v-3a1 1 0 0 1 1-1zm-12-4v8h4v-8a2 2 0 1 0-4 0m20 10v2H6v-2zm-8-4v2h6v-2zm-24-2V23h2v10zm-2 2h6v2H8z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsMinistryOfHealthOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
