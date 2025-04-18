import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CalculatorIcon],svg[fluent-mdl2-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0h1408v2048H256zm1280 1920V128H384v1792zM1408 256v384H512V256zm-128 256V384H640v128zM640 896v128H512V896zm256 128V896h128v128zm384 0V896h128v128zm-640 256v128H512v-128zm256 128v-128h128v128zm384 0v-128h128v128zm-640 256v128H512v-128zm256 128v-128h128v128zm384 0v-128h128v128z"></svg:path>`,
})
export class FluentMdl2CalculatorIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
