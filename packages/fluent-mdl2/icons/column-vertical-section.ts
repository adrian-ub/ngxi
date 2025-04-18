import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ColumnVerticalSectionIcon],svg[fluent-mdl2-column-vertical-section-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1408 256h640v1536h-640zm512 1408V384h-384v1280zM256 384V256h256v128zm384 0V256h256v128zM256 1792v-128h256v128zm384 0v-128h256v128zM0 896V640h128v256zm0-384V256h128v256zm0 1152v-256h128v256zm0-384v-256h128v256zm1024-256V768h128v256zm0-384V384h128v256zm0 1152v-256h128v256zm0-384v-256h128v256z"></svg:path>`,
})
export class FluentMdl2ColumnVerticalSectionIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
