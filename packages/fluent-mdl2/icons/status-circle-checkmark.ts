import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2StatusCircleCheckmarkIcon],svg[fluent-mdl2-status-circle-checkmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1453 941l-621 621l-365-365l90-90l275 275l531-531z"></svg:path>`,
})
export class FluentMdl2StatusCircleCheckmarkIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
