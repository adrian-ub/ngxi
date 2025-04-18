import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilAlignLetterRightIcon],svg[uil-align-letter-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4h11a1 1 0 0 0 0-2H10a1 1 0 0 0 0 2m11 16H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0-14H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0 10H11a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m0-6H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilAlignLetterRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
