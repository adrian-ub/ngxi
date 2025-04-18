import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabClothIcon],svg[lucide-lab-cloth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a1.41 1.41 0 0 0 0 2l1 1a1.41 1.41 0 0 1 0 2l-1 1a1.41 1.41 0 0 0 0 2l1 1a1.41 1.41 0 0 1 0 2l-1 1a1.41 1.41 0 0 0 0 2l2 2a1.41 1.41 0 0 0 2 0l1-1a1.41 1.41 0 0 1 2 0l1 1a1.41 1.41 0 0 0 2 0l1-1a1.41 1.41 0 0 1 2 0l1 1a1.41 1.41 0 0 0 2 0l2-2a1.41 1.41 0 0 0 0-2l-1-1a1.41 1.41 0 0 1 0-2l1-1a1.41 1.41 0 0 0 0-2l-1-1a1.41 1.41 0 0 1 0-2l1-1a1.41 1.41 0 0 0 0-2l-2-2a1.41 1.41 0 0 0-2 0l-1 1a1.41 1.41 0 0 1-2 0l-1-1a1.41 1.41 0 0 0-2 0l-1 1a1.41 1.41 0 0 1-2 0L7 3a1.41 1.41 0 0 0-2 0Z"></svg:path>`,
})
export class LucideLabClothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
