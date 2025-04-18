import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimWebGridAltIcon],svg[uim-web-grid-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8H2v2h9v12h2V10h9z" opacity=".25"></svg:path><svg:path fill="currentColor" d="M3 2h18a1 1 0 0 1 1 1v5H2V3a1 1 0 0 1 1-1"></svg:path><svg:path fill="currentColor" d="M2 10h9v12H3a1 1 0 0 1-1-1zm11 0h9v11a1 1 0 0 1-1 1h-8z" opacity=".5"></svg:path>`,
})
export class UimWebGridAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
