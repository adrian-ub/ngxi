import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRvTruckIcon],svg[mdi-rv-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h2V6l-2-2H3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h1a3 3 0 0 0 3 3a3 3 0 0 0 3-3h5a3 3 0 0 0 6 0h2v-5M7 18.5a1.5 1.5 0 0 1 0-3a1.5 1.5 0 0 1 0 3M9 12H3V9h6m5 6h-3V9h3m4 9.5a1.5 1.5 0 1 1 1.5-1.5a1.54 1.54 0 0 1-1.5 1.5M17 12V9.5h2.5l2 2.5Z"></svg:path>`,
})
export class MdiRvTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
