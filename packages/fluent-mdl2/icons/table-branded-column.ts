import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TableBrandedColumnIcon],svg[fluent-mdl2-table-branded-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h2048v1664H0zm768 640v384h512V768zm512-128V256H768v384zm-512 640v384h512v-384z"></svg:path>`,
})
export class FluentMdl2TableBrandedColumnIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
