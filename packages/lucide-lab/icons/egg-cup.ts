import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabEggCupIcon],svg[lucide-lab-egg-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 11c0-3.3-2.7-9-6-9s-6 5.7-6 9m13 0a7 7 0 1 1-14 0Zm-7 7v4m-3 0h6"></svg:path>`,
})
export class LucideLabEggCupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
