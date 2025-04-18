import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DuplicateRowIcon],svg[fluent-mdl2-duplicate-row-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 768h384v768H384v-384H0V384h1664zM384 1024V768h1152V512H128v512zm1536 384V896H512v512z"></svg:path>`,
})
export class FluentMdl2DuplicateRowIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
