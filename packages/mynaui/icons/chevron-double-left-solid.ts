import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleLeftSolidIcon],svg[mynaui-chevron-double-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 5.47a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 1.06 0v-4.939l4.94 4.94a.75.75 0 0 0 1.06 0V5.47a.75.75 0 0 0-1.06 0l-4.94 4.939z"></svg:path>`,
})
export class MynauiChevronDoubleLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
