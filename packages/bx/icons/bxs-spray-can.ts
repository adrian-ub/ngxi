import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsSprayCanIcon],svg[bx-bxs-spray-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13.003 3h2v2h-2zM16 3h2v2h-2zm0 3h2v2h-2zm3-3h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2zM4.012 12v9a1 1 0 0 0 1 1H13a1 1 0 0 0 1-1v-9a4 4 0 0 0-4-4H8.012a4 4 0 0 0-4 4zM7.003 2h4v4h-4z" fill="currentColor"></svg:path>`,
})
export class BxBxsSprayCanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
