import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexGlobeIcon],svg[codex-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M18 12a6 6 0 0 1-12 0m12 0a6 6 0 0 0-12 0m12 0H6m5.7-6s-2 1.638-2 6c0 4.9 2 6 2 6m.6-12s2 1.638 2 6c0 4.9-2 6-2 6"></svg:path>`,
})
export class CodexGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
