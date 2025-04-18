import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FinancialSolidIcon],svg[fluent-mdl2-financial-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 1898l384-384v534H0zm512-512l384-384v1046H512zm1280-490h128v1152h-384v-918zm-448 426l64-64v790h-384V1002zm704-1066v512h-128V475l-576 575l-384-384L0 1627v-182l960-959l384 384l485-486h-293V256z"></svg:path>`,
})
export class FluentMdl2FinancialSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
