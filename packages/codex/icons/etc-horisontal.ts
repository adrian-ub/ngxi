import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexEtcHorisontalIcon],svg[codex-etc-horisontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M7.305 11.995v.01m4.7-.01v.01m4.7-.01v.01"></svg:path>`,
})
export class CodexEtcHorisontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
