import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RowsChildIcon],svg[fluent-mdl2-rows-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 1024v640H768v-256H256V896H0V256h1280v640H384v384h384v-256zM128 768h1024V384H128zm1792 384H896v384h1024z"></svg:path>`,
})
export class FluentMdl2RowsChildIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
