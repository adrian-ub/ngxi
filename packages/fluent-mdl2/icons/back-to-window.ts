import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BackToWindowIcon],svg[fluent-mdl2-back-to-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1152h640v640H768v-421L93 2045l-90-90l674-675H256zm1115-384h421v128h-640V256h128v421L1955 3l90 90z"></svg:path>`,
})
export class FluentMdl2BackToWindowIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
