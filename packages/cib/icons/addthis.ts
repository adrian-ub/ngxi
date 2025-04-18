import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibAddthisIcon],svg[cib-addthis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 17.995h-6v5.979h-4v-5.979H8v-3.984h6V8.027h4v5.984h6zM28 .052H4a4.01 4.01 0 0 0-4 3.99v23.922a4.007 4.007 0 0 0 4 3.984h24a4.007 4.007 0 0 0 4-3.984V4.042a4.01 4.01 0 0 0-4-3.99"></svg:path>`,
})
export class CibAddthisIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
