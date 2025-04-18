import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStore3FillIcon],svg[ri-store-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7H2v-2l1-5h18l1 5v2zM5 13v6h14v-6zm1 1h8v3H6zM3 3h18v2H3z"></svg:path>`,
})
export class RiStore3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
