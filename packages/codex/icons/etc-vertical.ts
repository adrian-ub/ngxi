import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexEtcVerticalIcon],svg[codex-etc-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M12.01 7.3H12m.01 4.7H12m.01 4.7H12"></svg:path>`,
})
export class CodexEtcVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
