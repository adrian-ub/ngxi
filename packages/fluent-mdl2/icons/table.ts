import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TableIcon],svg[fluent-mdl2-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 256h1664v1536H128zm640 768v256h384v-256zm384-128V640H768v256zm-512 0V640H256v256zm-384 128v256h384v-256zm384 640v-256H256v256zm512 0v-256H768v256zm512 0v-256h-384v256zm0-384v-256h-384v256zm0-384V640h-384v256zM256 512h1408V384H256z"></svg:path>`,
})
export class FluentMdl2TableIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
