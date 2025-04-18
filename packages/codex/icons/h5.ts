import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexH5Icon],svg[codex-h5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7v5m0 5v-5m0 0h6m0-5v5m0 5v-5m4 3.9s.377 1.1 1.8 1.1c1.7 0 2.2-1.38 2.2-2.3c0-1.968-2.326-2.651-3.837-1.71c-.069.043-.163-.005-.163-.087V10.1a.1.1 0 0 1 .1-.1h3.7"></svg:path>`,
})
export class CodexH5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
