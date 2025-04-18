import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimWebSectionAltIcon],svg[uim-web-section-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.9 2H8.1A2.6 2.6 0 0 0 8 3v18c-.032.337.002.676.1 1h1.8c.098-.324.132-.663.1-1V3a2.6 2.6 0 0 0-.1-1" opacity=".25"></svg:path><svg:path fill="currentColor" d="M3 2h5v20H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"></svg:path><svg:path fill="currentColor" d="M10 2h11a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H10z" opacity=".5"></svg:path>`,
})
export class UimWebSectionAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
