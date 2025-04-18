import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabFeatherPlusIcon],svg[lucide-lab-feather-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 7h6M5 4v6m.1 7H14l8-8.2c-2.3-2.3-6.1-2.3-8.5 0L2.1 20M18 13H9.2"></svg:path>`,
})
export class LucideLabFeatherPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
