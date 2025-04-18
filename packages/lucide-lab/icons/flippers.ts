import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabFlippersIcon],svg[lucide-lab-flippers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20 17c0-4 2-7 2-13.5c0-.3-.2-.5-.5-.5C19 3 17 4 17 4s-2-1-4.5-1h-1C9 3 7 4 7 4S5 3 2.5 3c-.3 0-.5.2-.5.5C2 10 4 13 4 17"></svg:path><svg:path d="M12 3v.5C12 10 10 13 10 17"></svg:path><svg:rect width="6" height="7" x="4" y="14" rx="3"></svg:rect><svg:path d="M12 3.5C12 10 14 13 14 17"></svg:path><svg:rect width="6" height="7" x="14" y="14" rx="3"></svg:rect><svg:path d="M7 4v6m10-6v6"></svg:path></svg:g>`,
})
export class LucideLabFlippersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
