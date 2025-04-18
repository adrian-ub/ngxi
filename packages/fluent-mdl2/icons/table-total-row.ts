import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TableTotalRowIcon],svg[fluent-mdl2-table-total-row-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h2048v1664H0zm1920 512V256h-512v384zm-640 128H768v384h512zM768 640h512V256H768zm-128 512V768H128v384zm768 0h512V768h-512zM640 256H128v384h512z"></svg:path>`,
})
export class FluentMdl2TableTotalRowIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
