import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TableHeaderRowIcon],svg[fluent-mdl2-table-header-row-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h2048v1664H0zm768 1024h512V768H768zm512 128H768v384h512zM640 768H128v384h512zm768 0v384h512V768zM128 1280v384h512v-384zm1280 384h512v-384h-512z"></svg:path>`,
})
export class FluentMdl2TableHeaderRowIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
