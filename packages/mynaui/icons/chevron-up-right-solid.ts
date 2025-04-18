import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpRightSolidIcon],svg[mynaui-chevron-up-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.886 7.879a.75.75 0 0 1 .75-.75h8.485a.75.75 0 0 1 .75.75v8.485a.75.75 0 0 1-.75.75z"></svg:path>`,
})
export class MynauiChevronUpRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
