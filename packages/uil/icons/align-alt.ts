import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilAlignAltIcon],svg[uil-align-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11H3a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2m0 8H3a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2m4-14h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2m-4 2H3a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2m0 8H3a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2m0-12H7a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2m11 4h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2m0 4h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2m-4 8h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2m4-4h-7a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilAlignAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
