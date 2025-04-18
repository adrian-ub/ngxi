import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PC1Icon],svg[fluent-mdl2-p-c-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 1536h-640v128h256v128h-640v-128h256v-128H896v256H0V128h896v512h1152zm-128-128V768H768v640zM768 1664v-128H256v-128h384v-128H256v-128h384V640h128V256H128v1408zM640 384v128H256V384z"></svg:path>`,
})
export class FluentMdl2PC1Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
