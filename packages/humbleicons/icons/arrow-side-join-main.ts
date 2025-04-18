import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsArrowSideJoinMainIcon],svg[humbleicons-arrow-side-join-main-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15h13.01m0 0a6 6 0 0 1-5.23-3.058l-1.06-1.884A6 6 0 0 0 4.49 7H3m13.01 8H21m0 0l-3 3m3-3l-3-3"></svg:path>`,
})
export class HumbleiconsArrowSideJoinMainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
