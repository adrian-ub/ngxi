import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimAlignRightIcon],svg[uim-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m0 4H7a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2m0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m0 4H7a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2"></svg:path>`,
})
export class UimAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
