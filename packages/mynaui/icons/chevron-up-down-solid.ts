import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronUpDownSolidIcon],svg[mynaui-chevron-up-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.53 3.47a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 0 1.06h9.06a.75.75 0 0 0 0-1.06zm4 13.06a.75.75 0 0 0 0-1.06H7.47a.75.75 0 0 0 0 1.06l4 4a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class MynauiChevronUpDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
