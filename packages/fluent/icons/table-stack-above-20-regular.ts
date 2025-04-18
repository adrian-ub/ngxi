import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableStackAbove20RegularIcon],svg[fluent-table-stack-above-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM4 13v2a1 1 0 0 0 1 1h2v-3zm8 3v-3H8v3zm1 0h2a1 1 0 0 0 1-1v-2h-3zm0-4h3V9h-3zm-1-3H8v3h4zM4 9v3h3V9z"></svg:path>`,
})
export class FluentTableStackAbove20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
