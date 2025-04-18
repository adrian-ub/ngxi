import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronLeftSolidIcon],svg[mynaui-chevron-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.47 18.53a.75.75 0 0 0 1.06 0V5.47a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 0 1.06z"></svg:path>`,
})
export class MynauiChevronLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
