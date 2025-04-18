import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFatCornerRightDownSolidIcon],svg[mynaui-fat-corner-right-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.15 2.253a.75.75 0 0 0-.535 1.337C6.408 5.778 7.812 7.594 8.13 9.028c.309 1.393.39 2.714.252 3.969H4a.75.75 0 0 0-.496 1.312l8.214 7.253a.75.75 0 0 0 1.007-.013l7.786-7.253a.75.75 0 0 0-.511-1.3h-4.063c-.194-2.747-1.342-5.118-3.422-7.08C10.262 3.79 7.46 2.574 4.15 2.252"></svg:path>`,
})
export class MynauiFatCornerRightDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
