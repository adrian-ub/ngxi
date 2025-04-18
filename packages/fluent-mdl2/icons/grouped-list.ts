import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GroupedListIcon],svg[fluent-mdl2-grouped-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 384V256h384v128zm512-128h768v128h-768zM0 640V128h512v512zm128-384v256h256V256zm512 768V896h384v128zm512 0V896h768v128zM0 1280V768h512v512zm128-384v256h256V896zm512 768v-128h384v128zm512 0v-128h768v128zM0 1920v-512h512v512zm128-384v256h256v-256z"></svg:path>`,
})
export class FluentMdl2GroupedListIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
