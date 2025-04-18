import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextIndentIncrease24FilledIcon],svg[fluent-text-indent-increase-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16h8.5a1 1 0 0 1 .117 1.993L17.5 18H9a1 1 0 0 1-.117-1.993zh8.5zM2.293 9.293a1 1 0 0 1 1.32-.083l.094.083l2 2a1 1 0 0 1 .083 1.32l-.083.094l-2 2a1 1 0 0 1-1.497-1.32l.083-.094L3.586 12l-1.293-1.293a1 1 0 0 1 0-1.414M9 11l11.5-.001a1 1 0 0 1 .117 1.993L20.5 13H9a1 1 0 0 1-.117-1.993zl11.5-.001zm0-5h8.5a1 1 0 0 1 .117 1.993L17.5 8H9a1 1 0 0 1-.117-1.993zh8.5z"></svg:path>`,
})
export class FluentTextIndentIncrease24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
