import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabHouseOffIcon],svg[lucide-lab-house-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M21 15.3V9l-9-7l-2.4 1.9M2 2l20 20M6.4 6.4L3 9v11a2 2 0 0 0 2 2h14a2 2 0 0 0 1.8-1.2"></svg:path><svg:path d="M12 12H9v10m6 0v-7"></svg:path></svg:g>`,
})
export class LucideLabHouseOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
