import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ArrowDownRight8Icon],svg[fluent-mdl2-arrow-down-right-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 256h256v1792H256v-256h1355L37 219L219 37l1573 1574z"></svg:path>`,
})
export class FluentMdl2ArrowDownRight8Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
