import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TableLastColumnIcon],svg[fluent-mdl2-table-last-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h2048v1664H0zm768 640v384h512V768zm-128 384V768H128v384zm640-512V256H768v384zm0 640H768v384h512zM640 256H128v384h512zM128 1280v384h512v-384z"></svg:path>`,
})
export class FluentMdl2TableLastColumnIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
