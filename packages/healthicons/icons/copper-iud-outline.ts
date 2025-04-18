import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCopperIudOutlineIcon],svg[healthicons-copper-iud-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M23 6h-4.132l1-2H23a1 1 0 0 1 1 1a1 1 0 0 1 1-1h3.132l1 2H25v10.257l-2-1zM10 5a1 1 0 0 0 1 1h1.632l1-2H11a1 1 0 0 0-1 1m4.868 1l1-2h1.764l-1 2z"></svg:path><svg:path fill-rule="evenodd" d="M20 40a4 4 0 0 1 3-3.874V25.493l2 1v9.633A4.002 4.002 0 0 1 24 44a4 4 0 0 1-4-4m4-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4" clip-rule="evenodd"></svg:path><svg:path d="m25 20.257l-2-1v-1.764l2 1zm0 2.236l-2-1v1.764l2 1zM38 5a1 1 0 0 0-1-1h-2.632l1 2H37a1 1 0 0 0 1-1m-6.632 1l-1-2h1.764l1 2z"></svg:path></svg:g>`,
})
export class HealthiconsCopperIudOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
