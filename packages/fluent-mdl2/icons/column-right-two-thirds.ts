import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ColumnRightTwoThirdsIcon],svg[fluent-mdl2-column-right-two-thirds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 256h1280v1536H768zm1152 1408V384H896v1280zM0 1792V256h640v1536zM128 384v1280h384V384z"></svg:path>`,
})
export class FluentMdl2ColumnRightTwoThirdsIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
