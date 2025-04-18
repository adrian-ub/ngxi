import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableResizeRow16FilledIcon],svg[fluent-table-resize-row-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.95 12a2.5 2.5 0 0 1-2.45 2h-7a2.5 2.5 0 0 1-2.45-2h4.328l.561.561a1.5 1.5 0 0 0 2.122 0L9.622 12zm.05-1h-3.381A1.5 1.5 0 0 0 9.5 8.5v-1A1.5 1.5 0 0 0 10.617 5H14zM2.05 4h4.33l.56-.56a1.5 1.5 0 0 1 2.12 0l.56.56h4.33a2.5 2.5 0 0 0-2.45-2h-7a2.5 2.5 0 0 0-2.45 2m3.39 3.061A1.5 1.5 0 0 1 5.382 5H2v6h3.381A1.5 1.5 0 0 1 6.5 8.5v-1c-.384 0-.768-.146-1.06-.439m4.414-.707a.5.5 0 0 1-.708 0L8.5 5.707v4.586l.646-.647a.5.5 0 1 1 .708.708l-1.5 1.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708l.646.647V5.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1 0 .708"></svg:path>`,
})
export class FluentTableResizeRow16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
