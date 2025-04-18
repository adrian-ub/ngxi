import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChevronDoubleUpSolidIcon],svg[mynaui-chevron-double-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.53 12.53a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0 0 1.06h4.939l-4.94 4.94a.75.75 0 0 0 0 1.06H18.53a.75.75 0 0 0 0-1.06l-4.939-4.94z"></svg:path>`,
})
export class MynauiChevronDoubleUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
