import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataTreemap20RegularIcon],svg[fluent-data-treemap-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 1v12H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1 12v-3h8v1a2 2 0 0 1-2 2zm8-4H8V4h6a2 2 0 0 1 2 2z"></svg:path>`,
})
export class FluentDataTreemap20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
