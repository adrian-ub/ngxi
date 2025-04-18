import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRibbon16RegularIcon],svg[fluent-ribbon-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1a5 5 0 0 0-3 9v4.5a.5.5 0 0 0 .757.429L8 13.583l2.243 1.346A.5.5 0 0 0 11 14.5V10a5 5 0 0 0-3-9M4 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0m6 4.584v3.033L8.257 12.57a.5.5 0 0 0-.514 0L6 13.617v-3.033A5 5 0 0 0 8 11c.711 0 1.388-.148 2-.416"></svg:path>`,
})
export class FluentRibbon16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
