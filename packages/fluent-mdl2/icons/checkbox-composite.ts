import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CheckboxCompositeIcon],svg[fluent-mdl2-checkbox-composite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 0v2048H0V0zm-128 128H128v1792h1792zM768 1627l-429-430l90-90l339 338l851-850l90 90z"></svg:path>`,
})
export class FluentMdl2CheckboxCompositeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
