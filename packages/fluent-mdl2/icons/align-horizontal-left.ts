import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AlignHorizontalLeftIcon],svg[fluent-mdl2-align-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h128v2048H0zm1408 896H256V384h1152zm-128-384H384v256h896zm640 640v512H256v-512zm-128 128H384v256h1408z"></svg:path>`,
})
export class FluentMdl2AlignHorizontalLeftIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
