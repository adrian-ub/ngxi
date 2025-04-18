import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilLeftIndentIcon],svg[uil-left-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m0 4h10a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m18.77-1.31a1 1 0 0 0-1.41-.12l-2 1.66a1 1 0 0 0 0 1.54l2 1.66a1 1 0 0 0 .64.24a1 1 0 0 0 .77-.36a1 1 0 0 0-.13-1.41l-1.08-.9l1.08-.9a1 1 0 0 0 .13-1.41M21 17H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2M3 15h10a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2"></svg:path>`,
})
export class UilLeftIndentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
