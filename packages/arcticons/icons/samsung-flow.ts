import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSamsungFlowIcon],svg[arcticons-samsung-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.077 24.234H14.114c-5.042 0-9.364 4.045-9.24 9.086a8.864 8.864 0 0 0 8.639 8.638c5.04.124 9.086-4.197 9.086-9.24V15.143a6.1 6.1 0 0 1 6.099-6.099h5.379"></svg:path><svg:circle cx="37.974" cy="24.234" r="3.897" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37.974" cy="9.044" r="3.897" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsSamsungFlowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
