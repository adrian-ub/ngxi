import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CheckboxCompositeReversedIcon],svg[fluent-mdl2-checkbox-composite-reversed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 0v2048H0V0zm-339 685l-90-90l-851 850l-339-338l-90 90l429 430z"></svg:path>`,
})
export class FluentMdl2CheckboxCompositeReversedIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
