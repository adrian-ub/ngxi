import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowExportRtl16RegularIcon],svg[fluent-arrow-export-rtl-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 3a.5.5 0 0 0-.5.5V12a.5.5 0 0 0 1 0V3.5a.5.5 0 0 0-.5-.5m-9.146.646a.5.5 0 0 0-.708 0l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8H11.5a.5.5 0 0 0 0-1H2.707l2.647-2.646a.5.5 0 0 0 0-.708"></svg:path>`,
})
export class FluentArrowExportRtl16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
