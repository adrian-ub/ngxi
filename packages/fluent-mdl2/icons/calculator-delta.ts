import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CalculatorDeltaIcon],svg[fluent-mdl2-calculator-delta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 768v128H769V768zm256-512v384H256V256zm-128 256V384H384v128zm-384 768v128H513v-128zm256-256v128H769v-128zm129 640v-128h76l-64 128zm-512 0v-128h127v128zm383-384v128H769v-128zm-127 384v-128h127v128zm-513 0v-128h128v128zm896-896v128h-127V768zm0 512v128h-127v-128zm0-256v128h-127v-128zm-512 0v128H513v-128zM128 128v1664h845l-64 128H0V0h1408v922l-128 256V128zm512 640v128H513V768zm-256 0v128H256V768zm0 512v128H256v-128zm0-256v128H256v-128zm1152 0l512 1024H1024zm0 286l-305 610h610z"></svg:path>`,
})
export class FluentMdl2CalculatorDeltaIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
