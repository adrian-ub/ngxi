import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FinancialMirroredSolidIcon],svg[fluent-mdl2-financial-mirrored-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2048 1898l-384-384v534h384zm-512-512l-384-384v1046h384zM256 896H128v1152h384v-918zm448 426l-64-64v790h384V1002zM0 256v512h128V475l576 575l384-384l960 961v-182l-960-959l-384 384l-485-486h293V256z"></svg:path>`,
})
export class FluentMdl2FinancialMirroredSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
