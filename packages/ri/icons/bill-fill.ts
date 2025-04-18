import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBillFillIcon],svg[ri-bill-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M8 9v2h8V9zm0 4v2h8v-2z"></svg:path>`,
})
export class RiBillFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
