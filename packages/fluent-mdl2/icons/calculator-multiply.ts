import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CalculatorMultiplyIcon],svg[fluent-mdl2-calculator-multiply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1805 205l-755 755l755 755l-90 90l-755-755l-755 755l-90-90l755-755l-755-755l90-90l755 755l755-755z"></svg:path>`,
})
export class FluentMdl2CalculatorMultiplyIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
