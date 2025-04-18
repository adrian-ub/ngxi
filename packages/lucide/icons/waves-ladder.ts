import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideWavesLadderIcon],svg[lucide-waves-ladder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 5a2 2 0 0 0-2 2v11"></svg:path><svg:path d="M2 18c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M7 13h10M7 9h10"></svg:path><svg:path d="M9 5a2 2 0 0 0-2 2v11"></svg:path></svg:g>`,
})
export class LucideWavesLadderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
