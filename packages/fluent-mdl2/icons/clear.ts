import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ClearIcon],svg[fluent-mdl2-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1115 1024l914 915l-90 90l-915-914l-915 914l-90-90l914-915L19 109l90-90l915 914l915-914l90 90z"></svg:path>`,
})
export class FluentMdl2ClearIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
