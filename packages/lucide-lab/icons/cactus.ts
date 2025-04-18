import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCactusIcon],svg[lucide-lab-cactus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8v6a2 2 0 0 0 2 2h2m6-2h2a2 2 0 0 0 2-2V6M9 22V5a3 3 0 1 1 6 0v17m-8 0h10"></svg:path>`,
})
export class LucideLabCactusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
