import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSwipeRightAltOutlineIcon],svg[material-symbols-swipe-right-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 17q-2.075 0-3.537-1.463T4 12t1.463-3.537T9 7q1.825 0 3.188 1.138T13.9 11h4.275L16.6 9.4L18 8l4 4l-4 4l-1.425-1.4l1.6-1.6H13.9q-.35 1.725-1.713 2.863T9 17m0-2q1.25 0 2.125-.875T12 12t-.875-2.125T9 9t-2.125.875T6 12t.875 2.125T9 15m0-3"></svg:path>`,
})
export class MaterialSymbolsSwipeRightAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
