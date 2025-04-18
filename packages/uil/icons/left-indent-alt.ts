import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilLeftIndentAltIcon],svg[uil-left-indent-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5a1 1 0 0 0-1 1v12a1 1 0 0 0 2 0V6a1 1 0 0 0-1-1m4 2h8a1 1 0 0 0 0-2h-8a1 1 0 0 0 0 2M5.77 9.69a1 1 0 0 0-1.41-.13l-2 1.67a1 1 0 0 0 0 1.54l2 1.67a1 1 0 0 0 1.41-.13a1 1 0 0 0-.13-1.41L4.56 12l1.08-.9a1 1 0 0 0 .13-1.41M21 9h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m0 4h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2m0 4h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilLeftIndentAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
