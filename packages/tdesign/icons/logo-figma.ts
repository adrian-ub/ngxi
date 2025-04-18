import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoFigmaIcon],svg[tdesign-logo-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5A4.5 4.5 0 0 1 8.5.5h7a4.5 4.5 0 0 1 2.829 8A4.5 4.5 0 0 1 13 15.742V19a4.5 4.5 0 1 1-7.329-3.5A4.5 4.5 0 0 1 4 12c0-1.414.652-2.675 1.671-3.5A4.5 4.5 0 0 1 4 5m4.5 2.5H11v-5H8.5a2.5 2.5 0 0 0 0 5m4.5-5v5h2.5a2.5 2.5 0 0 0 0-5zm-2 7H8.5a2.5 2.5 0 0 0 0 5H11zm0 7H8.5A2.5 2.5 0 1 0 11 19zm2-4.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0"></svg:path>`,
})
export class TdesignLogoFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
