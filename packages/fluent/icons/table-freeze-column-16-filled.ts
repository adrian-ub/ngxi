import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableFreezeColumn16FilledIcon],svg[fluent-table-freeze-column-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11.5a1.5 1.5 0 0 1-1.5 1.5H10v-2H6v3h5.5a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2H6v3h4V3h1.5A1.5 1.5 0 0 1 13 4.5zM10 10V6H6v4zM5 5V2h-.5A2.5 2.5 0 0 0 2 4.5V5zM2 6v4h3V6zm0 5.5V11h3v3h-.5A2.5 2.5 0 0 1 2 11.5"></svg:path>`,
})
export class FluentTableFreezeColumn16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
