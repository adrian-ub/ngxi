import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexPlusIcon],svg[codex-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7v5m0 5v-5m5 0h-5m0 0H7"></svg:path>`,
})
export class CodexPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
