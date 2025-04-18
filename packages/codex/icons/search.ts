import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexSearchIcon],svg[codex-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="10.5" cy="10.5" r="5.5"></svg:circle><svg:path stroke-linecap="round" d="M15.414 15L19 18.586"></svg:path></svg:g>`,
})
export class CodexSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
