import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MiniExpandMirroredIcon],svg[fluent-mdl2-mini-expand-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m805 1024l91-91l-549-549h421V256H128v640h128V475zm-549 128H128v640h1792V256h-896v128h768v768h-768v512H256zm1536 128v384h-640v-384z"></svg:path>`,
})
export class FluentMdl2MiniExpandMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
