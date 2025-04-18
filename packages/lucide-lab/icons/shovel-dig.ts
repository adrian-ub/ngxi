import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabShovelDigIcon],svg[lucide-lab-shovel-dig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.5c-1.7 0-3-1.3-3-3V2h6v1.5c0 1.7-1.3 3-3 3m0 9.5V6.5M8 22v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4M6 22h12"></svg:path>`,
})
export class LucideLabShovelDigIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
