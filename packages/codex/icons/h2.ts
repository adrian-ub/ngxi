import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexH2Icon],svg[codex-h2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7v5m0 5v-5m0 0h6m0-5v5m0 5v-5m4-1c0-1 3-1.5 3 1c0 1.977-2.932 2-2.999 4.898A.1.1 0 0 0 16.1 17h3.2"></svg:path>`,
})
export class CodexH2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
