import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2StatusCircleErrorXIcon],svg[fluent-mdl2-status-circle-error-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1050 1088l371 371l-90 90l-371-371l-371 371l-90-90l371-371l-371-371l90-90l371 371l371-371l90 90z"></svg:path>`,
})
export class FluentMdl2StatusCircleErrorXIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
