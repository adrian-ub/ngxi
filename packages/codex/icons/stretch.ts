import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexStretchIcon],svg[codex-stretch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 9l3 3l-3 3m-3-3h6M7 9l-3 3l3 3m-3-3h6"></svg:path>`,
})
export class CodexStretchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
