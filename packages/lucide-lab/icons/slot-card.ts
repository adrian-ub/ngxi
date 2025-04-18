import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabSlotCardIcon],svg[lucide-lab-slot-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 13H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3M6 9h12"></svg:path><svg:path d="m13 9l4 4v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9"></svg:path></svg:g>`,
})
export class LucideLabSlotCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
