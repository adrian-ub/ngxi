import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpLeftSolidIcon],svg[mynaui-chevron-up-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.879 7.129a.75.75 0 0 0-.75.75v8.485c0 .414.335.75.75.75l9.235-9.235a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class MynauiChevronUpLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
