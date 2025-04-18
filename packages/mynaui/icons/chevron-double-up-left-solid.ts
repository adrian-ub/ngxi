import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleUpLeftSolidIcon],svg[mynaui-chevron-double-up-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.745 5.5a.75.75 0 0 1 .75.75l-3.253 3.254h6.507a.75.75 0 0 1 .751.751L10.255 19.5a.75.75 0 0 1-.75-.75v-6.508L6.25 15.496a.75.75 0 0 1-.751-.751V6.251a.75.75 0 0 1 .75-.751z"></svg:path>`,
})
export class MynauiChevronDoubleUpLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
