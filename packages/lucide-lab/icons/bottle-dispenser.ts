import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBottleDispenserIcon],svg[lucide-lab-bottle-dispenser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="18.5" cy="5.5" r=".5"></svg:circle><svg:path d="M20 10h.01M9 2h7m-5 0v4"></svg:path><svg:rect width="4" height="4" x="9" y="6" rx="1"></svg:rect><svg:path d="M9 10c-1.7 0-3 1.3-3 3v7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-7c0-1.7-1.3-3-3-3Z"></svg:path><svg:path d="M6 14.5a6 6 0 0 1 5 0s2 1.25 5 0"></svg:path></svg:g>`,
})
export class LucideLabBottleDispenserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
