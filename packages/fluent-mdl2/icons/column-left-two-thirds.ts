import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ColumnLeftTwoThirdsIcon],svg[fluent-mdl2-column-left-two-thirds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1792V256h1280v1536zM128 384v1280h1024V384zm1280-128h640v1536h-640zm512 1408V384h-384v1280z"></svg:path>`,
})
export class FluentMdl2ColumnLeftTwoThirdsIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
