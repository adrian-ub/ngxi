import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimLeftIndentAltIcon],svg[uim-left-indent-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2m0-4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2m0-8h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2m0 4h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 19a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v12a1 1 0 0 1-1 1m-4-4.333a1 1 0 0 1-.64-.231l-2-1.667a1 1 0 0 1 0-1.538l2-1.667a1 1 0 0 1 1.28 1.538L4.562 12l1.078.898A1 1 0 0 1 5 14.667"></svg:path>`,
})
export class UimLeftIndentAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
