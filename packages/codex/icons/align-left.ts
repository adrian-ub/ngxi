import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexAlignLeftIcon],svg[codex-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7H5m12 10H5m8-5H5"></svg:path>`,
})
export class CodexAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
