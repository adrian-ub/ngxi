import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BulkUploadIcon],svg[fluent-mdl2-bulk-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1920h1024v128H384v-256H128V0h859l402 402l403 403v91h-640V384H512zm768-1152h293l-293-293zm-896 896V256h677L933 128H256v1536zm1344-410l317 317l-90 90l-163-162v549h-128v-549l-163 162l-90-90zm320-230v128h-640v-128z"></svg:path>`,
})
export class FluentMdl2BulkUploadIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
