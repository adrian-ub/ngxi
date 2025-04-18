import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2QRCodeIcon],svg[fluent-mdl2-q-r-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 640V384h256v256zM128 896V128h768v768zm128-640v512h512V256zm128 1408v-256h256v256zm-256 256v-768h768v768zm128-640v512h512v-512zm1408-896v256h-256V384zm-512-256h768v768h-768zm640 640V256h-512v512zm-640 768h128v128h-128zm256-256h-128v128h-128v-256h256zm256-128v128h-128v-128zm-128 128v256h-256v-128h128v-128zm-256 384h256v128h-128v128h-256v-128h128zm256 256v-128h256v128zm384-128h-128v-256h128zm-128-512v-128h128v256h-128v128h-128v-256zm-256 384v-128h128v128z"></svg:path>`,
})
export class FluentMdl2QRCodeIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
