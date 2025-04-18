import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleDownLeftSolidIcon],svg[mynaui-chevron-double-down-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.745 18.5a.75.75 0 0 0 .75-.75l-3.253-3.254h6.507a.75.75 0 0 0 .751-.751L10.255 4.5a.75.75 0 0 0-.75.75v6.508L6.25 8.504a.75.75 0 0 0-.751.751v8.494a.75.75 0 0 0 .75.751z"></svg:path>`,
})
export class MynauiChevronDoubleDownLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
