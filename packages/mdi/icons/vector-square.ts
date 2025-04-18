import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorSquareIcon],svg[mdi-vector-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h6v2h8V2h6v6h-2v8h2v6h-6v-2H8v2H2v-6h2V8H2zm14 6V6H8v2H6v8h2v2h8v-2h2V8zM4 4v2h2V4zm14 0v2h2V4zM4 18v2h2v-2zm14 0v2h2v-2z"></svg:path>`,
})
export class MdiVectorSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
