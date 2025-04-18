import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabLifeJacketIcon],svg[lucide-lab-life-jacket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14a2.5 2.5 0 0 0-.8-1.9a3.5 3.5 0 1 1 5.6 0l-.3.4A2.5 2.5 0 0 0 14 14v5a3 3 0 1 0 6 0v-9a8 8 0 0 0-16 0v9a3 3 0 1 0 6 0Z"></svg:path>`,
})
export class LucideLabLifeJacketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
