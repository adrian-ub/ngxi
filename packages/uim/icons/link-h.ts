import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimLinkHIcon],svg[uim-link-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 17H7A5 5 0 0 1 7 7h3a1 1 0 0 1 0 2H7a3 3 0 0 0 0 6h3a1 1 0 0 1 0 2m7 0h-3a1 1 0 0 1 0-2h3a3 3 0 0 0 0-6h-3a1 1 0 0 1 0-2h3a5 5 0 0 1 0 10"></svg:path><svg:path fill="currentColor" d="M15 13H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2" opacity=".5"></svg:path>`,
})
export class UimLinkHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
