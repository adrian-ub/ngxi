import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciLongBottomUpIcon],svg[ci-long-bottom-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.979 8.45l.007 3.55H19V5h-7v2.014l3.55.007L5 17.571L6.429 19l10.55-10.55Z"></svg:path>`,
})
export class CiLongBottomUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
