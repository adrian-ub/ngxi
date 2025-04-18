import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEditLineHorizontal320FilledIcon],svg[fluent-edit-line-horizontal-3-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.18 2.927a2.975 2.975 0 0 0-4.26-.054l-.669.67l4.207 4.206l.67-.669a2.975 2.975 0 0 0 .051-4.153m-13.635 9.32l8-7.998l4.206 4.207l-7.982 7.982a2.5 2.5 0 0 1-1.234.678l-3.926.873a.5.5 0 0 1-.597-.597l.878-3.95c.1-.452.328-.867.655-1.194M2.5 3h8.88l-1 1H2.5a.5.5 0 0 1 0-1m0 3h5.88L7.378 7H2.5a.5.5 0 0 1 0-1m0 3h2.879l-1 1H2.5a.5.5 0 0 1 0-1"></svg:path>`,
})
export class FluentEditLineHorizontal320FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
