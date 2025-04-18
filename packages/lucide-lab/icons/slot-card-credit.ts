import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabSlotCardCreditIcon],svg[lucide-lab-slot-card-credit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 13H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3M6 9h12"></svg:path><svg:path d="M17 9v8.3c0 .9-.9 1.7-2 1.7H9c-1.1 0-2-.7-2-1.7V9m4 0v10"></svg:path></svg:g>`,
})
export class LucideLabSlotCardCreditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
