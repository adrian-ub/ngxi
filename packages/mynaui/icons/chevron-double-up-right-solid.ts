import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleUpRightSolidIcon],svg[mynaui-chevron-double-up-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.257 5.507a.75.75 0 0 0-.75.75l3.25 3.25h-6.5a.75.75 0 0 0-.75.75l9.236 9.236a.75.75 0 0 0 .75-.75v-6.5l3.25 3.25a.75.75 0 0 0 .75-.75V6.257a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class MynauiChevronDoubleUpRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
