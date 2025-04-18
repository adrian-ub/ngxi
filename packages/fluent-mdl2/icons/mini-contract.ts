import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MiniContractIcon],svg[fluent-mdl2-mini-contract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 1280h128v512H128V256h768v128H256v768h768v512h768zm-1536 0v384h640v-384zm1536-256h-640V384h128v421l549-549l91 91l-549 549h421z"></svg:path>`,
})
export class FluentMdl2MiniContractIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
