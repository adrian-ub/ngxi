import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataTreemap20FilledIcon],svg[fluent-data-treemap-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1zm1 14h6a3 3 0 0 0 3-3v-1H8zm9-5V6a3 3 0 0 0-3-3H8v9z"></svg:path>`,
})
export class FluentDataTreemap20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
