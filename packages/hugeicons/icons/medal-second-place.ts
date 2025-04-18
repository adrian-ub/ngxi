import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMedalSecondPlaceIcon],svg[hugeicons-medal-second-place-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 15c0-3.866 3.022-7 6.75-7h.5C15.978 8 19 11.134 19 15s-3.022 7-6.75 7h-.5C8.022 22 5 18.866 5 15"></svg:path><svg:path d="M10.5 13.118c.08-.785.608-1.118 1.158-1.118h.666c.55 0 1.077.333 1.157 1.118a4 4 0 0 1 0 .764c-.049.478-.627 1.027-.627 1.027L12 15.5s-1.5 1-1.5 2c0 .54.437.5.977.5h2.004m.079-16L11 7.898M18 2l-2.821 6.5M10.44 2L12 5.594M6 2l2.821 6.5"></svg:path></svg:g>`,
})
export class HugeiconsMedalSecondPlaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
