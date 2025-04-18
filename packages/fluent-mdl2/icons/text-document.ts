import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TextDocumentIcon],svg[fluent-mdl2-text-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1243 0l549 549v1499H128V0zm37 219v293h293zM256 1920h1408V640h-512V128H256zm256-896V896h896v128zm0 256v-128h896v128zm0 256v-128h896v128z"></svg:path>`,
})
export class FluentMdl2TextDocumentIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
