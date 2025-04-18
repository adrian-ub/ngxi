import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DoubleColumnIcon],svg[fluent-mdl2-double-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1792V256h896v1536zM128 384v1280h640V384zm896-128h896v1536h-896zm768 1408V384h-640v1280z"></svg:path>`,
})
export class FluentMdl2DoubleColumnIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
