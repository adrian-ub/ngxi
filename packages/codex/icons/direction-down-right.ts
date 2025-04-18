import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexDirectionDownRightIcon],svg[codex-direction-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.883 9.167l3.334 3.333m0 0l-3.334 3.333m3.334-3.333H10.05a3.333 3.333 0 0 1-3.333-3.333"></svg:path>`,
})
export class CodexDirectionDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
