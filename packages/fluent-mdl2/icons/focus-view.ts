import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FocusViewIcon],svg[fluent-mdl2-focus-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640V256h128v512H256V640zm-384 768v-128h512v512H640v-384zm1024 384v-512h512v128h-384v384zm128-1152h384v128h-512V256h128z"></svg:path>`,
})
export class FluentMdl2FocusViewIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
