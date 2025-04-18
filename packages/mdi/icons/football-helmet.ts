import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFootballHelmetIcon],svg[mdi-football-helmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 12a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5m0-9c4.69 0 8.5 3.58 8.5 8c0 1.62 0 3-.91 5C17 16 16 20 12.5 20c-2.18 0-3.23-1.72-3.45-4h-.81l-1.28 4.3a1 1 0 0 1-1.12.7H3a1 1 0 0 1-1-1a1 1 0 0 1 1-1v-3a1 1 0 0 1-1-1a1 1 0 0 1 1-1h3.75l.48-1.61c-.51-.25-1.1-.39-1.73-.39h-.43L5 11c0-4.42 3.81-8 8.5-8M5 16v3h.26l.89-3z"></svg:path>`,
})
export class MdiFootballHelmetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
