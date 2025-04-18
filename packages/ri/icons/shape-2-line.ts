import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riShape2LineIcon],svg[ri-shape-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16h2v6h-6v-2H8v2H2v-6h2V8H2V2h6v2h8V2h6v6h-2zm-2 0V8h-2V6H8v2H6v8h2v2h8v-2zM4 4v2h2V4zm0 14v2h2v-2zM18 4v2h2V4zm0 14v2h2v-2z"></svg:path>`,
})
export class RiShape2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
