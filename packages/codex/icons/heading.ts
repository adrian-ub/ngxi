import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexHeadingIcon],svg[codex-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7v5m0 5v-5m0 0h6m0-5v5m0 5v-5"></svg:path>`,
})
export class CodexHeadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
