import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMinidiscIcon],svg[mdi-minidisc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm7 2a7 7 0 0 1 6.7 5H16a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2.71c-.89 2.97-3.62 5-6.71 5a7 7 0 0 1-7-7a7 7 0 0 1 7-7m0 5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiMinidiscIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
