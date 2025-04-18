import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableCellsMerge28FilledIcon],svg[fluent-table-cells-merge-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 3A3.75 3.75 0 0 0 3 6.75v.75h22v-.75A3.75 3.75 0 0 0 21.25 3zM25 9H3v10h22zm-6.42 4.25l-.89-1.002a.75.75 0 0 1 1.12-.996l1.998 2.247a.75.75 0 0 1 .013.987l-.01.012l-2 2.25a.75.75 0 1 1-1.122-.996l.89-1.002H9.42l.89 1.002a.75.75 0 0 1-1.12.996l-2-2.25a.75.75 0 0 1 0-.996l2-2.25a.75.75 0 0 1 1.12.996l-.89 1.002zM25 20.5H3v.75A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25z"></svg:path>`,
})
export class FluentTableCellsMerge28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
