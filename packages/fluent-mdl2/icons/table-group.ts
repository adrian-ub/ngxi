import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TableGroupIcon],svg[fluent-mdl2-table-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 512h1664v1536H384zm512 1408v-256H512v256zm0-384v-256H512v256zm0-384V896H512v256zm512 768v-256h-384v256zm0-384v-256h-384v256zm0-384V896h-384v256zm512 768v-256h-384v256zm0-384v-256h-384v256zm0-384V896h-384v256zm0-384V640H512v128zM128 384v256h128v128H128v256h128v128H128v256h128v128H0V0h1664v384zm0-256v128h1408V128z"></svg:path>`,
})
export class FluentMdl2TableGroupIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
