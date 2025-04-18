import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorSquareCloseIcon],svg[mdi-vector-square-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h2v2H4zm2 16H4v-2h2zM18 8v8h-2v2H8v-2H6V8h2V2H2v6h2v8H2v6h6v-2h8v2h6v-6h-2V8h2V2h-6v6zm2 12h-2v-2h2zM18 6V4h2v2zm-4 0h-4V4h4z"></svg:path>`,
})
export class MdiVectorSquareCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
