import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEditLineHorizontal324FilledIcon],svg[fluent-edit-line-horizontal-3-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.952 3.048a3.58 3.58 0 0 0-5.06 0l-.893.892L20.06 9l.892-.891a3.58 3.58 0 0 0 0-5.06M3.94 15l9.998-10l5.06 5.061l-9.997 10a3.1 3.1 0 0 1-1.477.825l-4.6 1.094a.75.75 0 0 1-.904-.903l1.096-4.602c.133-.559.419-1.07.825-1.476M2.75 3h11.775l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5m0 4h7.776l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5m0 4h3.776l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class FluentEditLineHorizontal324FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
