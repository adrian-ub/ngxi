import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCaretSortIcon],svg[carbon-caret-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 24l-8 8l-8-8zM8 8l8-8l8 8z"></svg:path>`,
})
export class CarbonCaretSortIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
