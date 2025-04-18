import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableCellsMerge16RegularIcon],svg[fluent-table-cells-merge-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.354 6.146a.5.5 0 0 1 0 .708l-.647.646h4.586l-.647-.646a.5.5 0 1 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708l.647-.646H5.707l.647.646a.5.5 0 1 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708 0M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm8.415 2h-9.83A1.5 1.5 0 0 1 4.5 3h7a1.5 1.5 0 0 1 1.415 1M3 5h10v6H3zm.085 7h9.83a1.5 1.5 0 0 1-1.415 1h-7a1.5 1.5 0 0 1-1.415-1"></svg:path>`,
})
export class FluentTableCellsMerge16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
