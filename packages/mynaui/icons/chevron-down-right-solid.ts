import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownRightSolidIcon],svg[mynaui-chevron-down-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.871 7.636a.75.75 0 0 0-.75-.75l-9.235 9.235c0 .415.336.75.75.75h8.485a.75.75 0 0 0 .75-.75z"></svg:path>`,
})
export class MynauiChevronDownRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
