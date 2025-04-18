import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexMenuIcon],svg[codex-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.41 7.3H9.4m5.2 0h-.01M9.31 12H9.3m5.3 0h-.01m-5.18 4.7H9.4m5.2 0h-.01"></svg:path>`,
})
export class CodexMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
