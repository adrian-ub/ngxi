import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PlainTextIcon],svg[fluent-mdl2-plain-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 1535v-255h128v256H128zm384-895v256H384V640zm512 1024v-128h128v128zm-128-384h128v256H896zM768 896H640V640h128zM640 384v256H512V384zm128 512h128v384H256V896h128v256h384zM0 1664v-128h128v128zm1408-896h384v128h-384zm-128 256V896h128v128zm0 256h128v256h-128zm128 384v-128h256v128zm384-768h128v768h-128v-128h-128v-128h128v-128h-384v-128h384z"></svg:path>`,
})
export class FluentMdl2PlainTextIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
