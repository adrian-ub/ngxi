import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimColumnsIcon],svg[uim-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2h2v20h-2z" opacity=".25"></svg:path><svg:path fill="currentColor" d="M3 2h8v20H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"></svg:path><svg:path fill="currentColor" d="M13 2h8a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-8z" opacity=".5"></svg:path>`,
})
export class UimColumnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
