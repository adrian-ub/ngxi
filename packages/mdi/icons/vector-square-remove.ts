import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorSquareRemoveIcon],svg[mdi-vector-square-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-.3 0-.7.1-1H8v-2H6V8h2V6h8v2h2v5.1c.3-.1.7-.1 1-.1s.7 0 1 .1V8h2V2h-6v2H8V2H2v6h2v8H2v6h6v-2h5.1c-.1-.3-.1-.7-.1-1m5-15h2v2h-2zM4 4h2v2H4zm2 16H4v-2h2zm16.5-3.1L20.4 19l2.1 2.1l-1.4 1.4l-2.1-2.1l-2.1 2.1l-1.4-1.4l2.1-2.1l-2.1-2.1l1.4-1.4l2.1 2.1l2.1-2.1z"></svg:path>`,
})
export class MdiVectorSquareRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
