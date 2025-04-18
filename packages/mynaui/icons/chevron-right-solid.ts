import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronRightSolidIcon],svg[mynaui-chevron-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.53 5.47a.75.75 0 0 0-1.06 0v13.06a.75.75 0 0 0 1.06 0l6-6a.75.75 0 0 0 0-1.06z"></svg:path>`,
})
export class MynauiChevronRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
