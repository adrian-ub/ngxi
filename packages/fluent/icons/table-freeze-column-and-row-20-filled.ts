import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableFreezeColumnAndRow20FilledIcon],svg[fluent-table-freeze-column-and-row-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V12h4V8H4V5.5A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5v9a1.5 1.5 0 0 1-1.5 1.5H12v-3H8v4h6.5a2.5 2.5 0 0 0 2.5-2.5zm-14 9V13h4v4H5.5A2.5 2.5 0 0 1 3 14.5M8 8v4h4V8z"></svg:path>`,
})
export class FluentTableFreezeColumnAndRow20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
