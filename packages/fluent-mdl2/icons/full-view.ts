import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FullViewIcon],svg[fluent-mdl2-full-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 1664v-384h128v512h-512v-128zM1280 256h512v512h-128V384h-384zM256 768V256h512v128H384v384zm128 512v384h384v128H256v-512z"></svg:path>`,
})
export class FluentMdl2FullViewIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
