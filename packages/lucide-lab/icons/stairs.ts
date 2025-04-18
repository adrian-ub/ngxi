import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabStairsIcon],svg[lucide-lab-stairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 16h10v4H2zm2-4h10v4H4zm2-4h10v4H6zm2-4h10v4H8z"></svg:path><svg:path d="M12 20h10V4h-4"></svg:path></svg:g>`,
})
export class LucideLabStairsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
