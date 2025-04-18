import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PrintfaxPrinterFileIcon],svg[fluent-mdl2-printfax-printer-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 549v1499H128V0h1115zm-512 731v128h128v-384h-128v128H640v-128H512v384h128v-128zm-512 128v128h384v-128zm384-384V640H768v384zm128-512h293l-293-293zm384 1408V640h-384v256h256v640h-256v128H640v-128H384V896h256V512h512V128H256v1792z"></svg:path>`,
})
export class FluentMdl2PrintfaxPrinterFileIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
