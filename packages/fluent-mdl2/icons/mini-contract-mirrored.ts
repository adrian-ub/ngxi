import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MiniContractMirroredIcon],svg[fluent-mdl2-mini-contract-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1280H128v512h1792V256h-768v128h640v768h-768v512H256zm1536 0v384h-640v-384zM256 1024h640V384H768v421L219 256l-91 91l549 549H256z"></svg:path>`,
})
export class FluentMdl2MiniContractMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
