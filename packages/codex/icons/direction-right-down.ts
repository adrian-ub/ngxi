import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexDirectionRightDownIcon],svg[codex-direction-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9.133 14.917l3.334 3.333m0 0l3.333-3.333m-3.333 3.333v-8.167A3.333 3.333 0 0 0 9.133 6.75"></svg:path>`,
})
export class CodexDirectionRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
