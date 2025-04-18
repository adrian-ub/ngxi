import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CalculatorAdditionIcon],svg[fluent-mdl2-calculator-addition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 896v128h-896v896H896v-896H0V896h896V0h128v896z"></svg:path>`,
})
export class FluentMdl2CalculatorAdditionIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
