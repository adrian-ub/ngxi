import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexDirectionLeftDownIcon],svg[codex-direction-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.917 14.917l-3.334 3.333m0 0L8.25 14.917m3.333 3.333v-8.167a3.333 3.333 0 0 1 3.334-3.333"></svg:path>`,
})
export class CodexDirectionLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
