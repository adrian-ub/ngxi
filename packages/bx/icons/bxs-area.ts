import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsAreaIcon],svg[bx-bxs-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14zm9-13h6v6h-2V8h-4V6zm-6 6h2v4h4v2H6v-6z" fill="currentColor"></svg:path>`,
})
export class BxBxsAreaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
