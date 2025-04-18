import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabPillowIcon],svg[lucide-lab-pillow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.3 7.5a2 2 0 1 0-2.9-2.7C17 4.3 14.6 4 12 4s-4.9.3-6.4.8a2 2 0 1 0-2.9 2.7a14 14 0 0 0 0 9a2 2 0 1 0 2.9 2.7c1.5.5 3.8.8 6.4.8s5-.3 6.4-.8a2 2 0 1 0 2.9-2.7a14 14 0 0 0 0-9"></svg:path>`,
})
export class LucideLabPillowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
