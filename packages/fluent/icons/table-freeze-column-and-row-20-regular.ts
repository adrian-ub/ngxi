import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableFreezeColumnAndRow20RegularIcon],svg[fluent-table-freeze-column-and-row-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5zM4 8v4h3V8zm0 5v1.5a1.5 1.5 0 0 0 1.356 1.493L5.5 16H7v-3zm4-1h4V8H8zm4 4v-3H8v3zM4 5.5V7h9v9h1.5a1.5 1.5 0 0 0 1.493-1.355L16 14.5v-9a1.5 1.5 0 0 0-1.355-1.493L5.5 4a1.5 1.5 0 0 0-1.493 1.356z"></svg:path>`,
})
export class FluentTableFreezeColumnAndRow20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
