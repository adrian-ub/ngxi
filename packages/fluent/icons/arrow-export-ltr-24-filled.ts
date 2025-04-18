import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowExportLtr24FilledIcon],svg[fluent-arrow-export-ltr-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 4.504a.75.75 0 0 1 .743.648l.007.102v13.499a.75.75 0 0 1-1.493.101L2 18.753v-13.5a.75.75 0 0 1 .75-.75m12.46 1.883l.083-.094a1 1 0 0 1 1.32-.083l.094.083l4.997 4.998a1 1 0 0 1 .083 1.32l-.083.093l-4.996 5.004a1 1 0 0 1-1.499-1.32l.083-.094L18.581 13H6a1 1 0 0 1-.993-.883L5 12a1 1 0 0 1 .883-.993L6 11h12.584l-3.291-3.293a1 1 0 0 1-.083-1.32l.083-.094z"></svg:path>`,
})
export class FluentArrowExportLtr24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
