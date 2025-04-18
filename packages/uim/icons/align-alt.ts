import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimAlignAltIcon],svg[uim-align-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5H7a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2m0 4H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2m0 4H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2m0 4H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2m0 4H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2M21 5h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2m0 4h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2m0 4h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2m0 4h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2m-4 4h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2"></svg:path>`,
})
export class UimAlignAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
