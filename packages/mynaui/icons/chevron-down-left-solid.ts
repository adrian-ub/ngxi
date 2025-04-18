import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDownLeftSolidIcon],svg[mynaui-chevron-down-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.364 16.871a.75.75 0 0 0 .75-.75L7.879 6.886a.75.75 0 0 0-.75.75v8.485c0 .415.335.75.75.75z"></svg:path>`,
})
export class MynauiChevronDownLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
