import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCupSaucerIcon],svg[lucide-lab-cup-saucer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 18a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4ZM6 8h12v6a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4Zm12 0h1a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-1M6 4a1 1 0 0 1 1-1a1 1 0 0 0 1-1m4 2a1 1 0 0 1 1-1a1 1 0 0 0 1-1m4 2a1 1 0 0 1 1-1a1 1 0 0 0 1-1"></svg:path>`,
})
export class LucideLabCupSaucerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
