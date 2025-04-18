import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2KeyPhraseExtractionIcon],svg[fluent-mdl2-key-phrase-extraction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1152v128H0v-128zm640-256v128H640V896zM1371 0l549 549v1499H256v-640h128v512h1408V640h-512V128H384v896H256V0zm37 512h293l-293-293zM640 1536v-128h896v128z"></svg:path>`,
})
export class FluentMdl2KeyPhraseExtractionIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
