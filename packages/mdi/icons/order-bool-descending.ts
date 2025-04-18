import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiOrderBoolDescendingIcon],svg[mdi-order-bool-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2M6 3C3.79 3 2 4.79 2 7s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m6 2h10v2H12zm0 14v-2h10v2zm0-8h10v2H12z"></svg:path>`,
})
export class MdiOrderBoolDescendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
