import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CalculatorNotEqualToIcon],svg[fluent-mdl2-calculator-not-equal-to-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1432 640l-747 640h1235v128H536l-430 369l-84-98l317-271H0v-128h488l747-640H0V512h1384l430-369l84 98l-317 271h339v128z"></svg:path>`,
})
export class FluentMdl2CalculatorNotEqualToIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
