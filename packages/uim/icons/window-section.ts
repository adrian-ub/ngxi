import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimWindowSectionIcon],svg[uim-window-section-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10h6v12H9zm-7 0v11a1 1 0 0 0 1 1h4V10z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M22 8H2v2h5v12h2V10h6v12h2V10h5z" opacity=".25"></svg:path><svg:path fill="currentColor" d="M17 10v12h4a1 1 0 0 0 1-1V10z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M3 2h18a1 1 0 0 1 1 1v5H2V3a1 1 0 0 1 1-1"></svg:path>`,
})
export class UimWindowSectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
