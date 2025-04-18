import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2StepSharedAddIcon],svg[fluent-mdl2-step-shared-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 768v1152H896v-256H128v-640h512V640h512V256h768v512zM896 1536v-256h512V768h384V384h-512v384H768v384H256v384zm1024-640h-384v512h-512v384h896zM256 384H0V256h256V0h128v256h256v128H384v256H256z"></svg:path>`,
})
export class FluentMdl2StepSharedAddIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
