import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimWebSectionIcon],svg[uim-web-section-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2h2v20h-2z" opacity=".25"></svg:path><svg:path fill="currentColor" d="M3 2h11v20H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16 2h5a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-5z"></svg:path>`,
})
export class UimWebSectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
