import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStoreMinusIcon],svg[mdi-store-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v2h16V4M4 7l-1 5v2h1v6h9c-.05-.34-.08-.69-.08-1.05c0-1.22.38-2.42 1.08-3.42V14h1.54c1-.67 2.17-1.04 3.37-1.04c.71 0 1.42.13 2.09.38V12l-1-5M6 14h6v4H6m9 0v2h8v-2"></svg:path>`,
})
export class MdiStoreMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
