import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codexTableWithoutHeadingsIcon],svg[codex-table-without-headings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M10 5v13.5M14 5v13.5M5 10h14M5 14h14"></svg:path><svg:rect width="14" height="14" x="5" y="5" rx="4"></svg:rect></svg:g>`,
})
export class CodexTableWithoutHeadingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
