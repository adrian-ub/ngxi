import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SortLinesAscendingIcon],svg[fluent-mdl2-sort-lines-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 483l317-318l317 318l-90 90l-163-163v1510H256V410L93 573zm1277-99v128H768V384zm384 384v128H768V768zm-896 384h1280v128H768z"></svg:path>`,
})
export class FluentMdl2SortLinesAscendingIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
