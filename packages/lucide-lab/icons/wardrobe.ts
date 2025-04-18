import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabWardrobeIcon],svg[lucide-lab-wardrobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="20" x="3" y="2" rx="2"></svg:rect><svg:path d="M8 10h.01M12 2v15m4-7h.01M3 17h18"></svg:path></svg:g>`,
})
export class LucideLabWardrobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
