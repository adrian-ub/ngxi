import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsSprayCanIcon],svg[bxs-spray-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.003 3h2v2h-2zM16 3h2v2h-2zm0 3h2v2h-2zm3-3h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2zM4.012 12v9a1 1 0 0 0 1 1H13a1 1 0 0 0 1-1v-9a4 4 0 0 0-4-4H8.012a4 4 0 0 0-4 4M7.003 2h4v4h-4z"></svg:path>`,
})
export class BxsSprayCanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
