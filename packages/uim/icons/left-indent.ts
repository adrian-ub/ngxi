import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimLeftIndentIcon],svg[uim-left-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m-8 4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2m8 8H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m-8-4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M21 14.666a1 1 0 0 1-.64-.231l-2-1.667a1 1 0 0 1 0-1.536l2-1.667a1 1 0 0 1 1.64.769v3.333a1 1 0 0 1-1 1Z"></svg:path>`,
})
export class UimLeftIndentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
