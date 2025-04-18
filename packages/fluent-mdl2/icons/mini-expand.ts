import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MiniExpandIcon],svg[fluent-mdl2-mini-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1243 1024l-91-91l549-549h-421V256h640v640h-128V475zm549 128h128v640H128V256h896v128H256v768h768v512h768zM256 1280v384h640v-384z"></svg:path>`,
})
export class FluentMdl2MiniExpandIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
