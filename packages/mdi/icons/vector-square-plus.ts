import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorSquarePlusIcon],svg[mdi-vector-square-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c0-.3 0-.7.1-1H8v-2H6V8h2V6h8v2h2v5.1c.3-.1.7-.1 1-.1s.7 0 1 .1V8h2V2h-6v2H8V2H2v6h2v8H2v6h6v-2h5.1c-.1-.3-.1-.7-.1-1m5-15h2v2h-2zM4 4h2v2H4zm2 16H4v-2h2zm14-5v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></svg:path>`,
})
export class MdiVectorSquarePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
