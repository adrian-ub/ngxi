import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLiftTruckIcon],svg[hugeicons-lift-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 17.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M20 4v11.01c0 .933 0 1.4.152 1.768c.325.784 1.038 1.18 1.848 1.222M4 9h1.746c.864 0 1.296 0 1.692.11a3 3 0 0 1 1.095.57c.317.26.566.613 1.062 1.32s.745 1.06 1.063 1.32a3 3 0 0 0 1.095.57c.395.11.827.11 1.691.11H15m3 0h2"></svg:path><svg:path d="M4 15V6a2 2 0 0 1 2-2h2.895a3 3 0 0 1 1.946.717l3.456 2.945A2 2 0 0 1 15 9.184V15m-8 2.5h5"></svg:path></svg:g>`,
})
export class HugeiconsLiftTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
