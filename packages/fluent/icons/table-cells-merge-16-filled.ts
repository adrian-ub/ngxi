import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableCellsMerge16FilledIcon],svg[fluent-table-cells-merge-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2a2.5 2.5 0 0 0-2.45 2h11.9a2.5 2.5 0 0 0-2.45-2zM2 11V5h12v6zm4.354-4.854a.5.5 0 0 0-.708 0l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708-.708L5.707 8.5h4.586l-.647.646a.5.5 0 1 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 0 0-.708.708l.647.646H5.707l.647-.646a.5.5 0 0 0 0-.708M13.95 12a2.5 2.5 0 0 1-2.45 2h-7a2.5 2.5 0 0 1-2.45-2z"></svg:path>`,
})
export class FluentTableCellsMerge16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
