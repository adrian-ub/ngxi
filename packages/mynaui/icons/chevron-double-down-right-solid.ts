import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleDownRightSolidIcon],svg[mynaui-chevron-double-down-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.255 18.5a.75.75 0 0 1-.75-.75l3.253-3.254H5.25a.75.75 0 0 1-.751-.751L13.745 4.5a.75.75 0 0 1 .75.75v6.508l3.254-3.254a.75.75 0 0 1 .751.751v8.494a.75.75 0 0 1-.75.751z"></svg:path>`,
})
export class MynauiChevronDoubleDownRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
