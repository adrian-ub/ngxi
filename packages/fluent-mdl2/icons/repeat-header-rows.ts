import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RepeatHeaderRowsIcon],svg[fluent-mdl2-repeat-header-rows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 384h1408v1664H640zm1280 1536V512H768v1408zM128 128v1408h384v128H0V0h1408v256h-128V128zm128 128h256v384H384v640h128v128H256zm1536 1536H896V640h896zm-512-768h-256v256h256zm-256 640h256v-256h-256zm640 0v-256h-256v256zm0-384v-256h-256v256z"></svg:path>`,
})
export class FluentMdl2RepeatHeaderRowsIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
