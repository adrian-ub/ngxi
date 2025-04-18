import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCauldronIcon],svg[lucide-lab-cauldron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="8" cy="3.5" r=".5"></svg:circle><svg:circle cx="14" cy="6" r="2"></svg:circle><svg:path d="M19 2h.01M22 8H2m5 4V8m4 2V8M4.4 8C2.9 9.5 2 11.4 2 13.5C2 18.2 6.5 22 12 22s10-3.8 10-8.5c0-2.1-.9-4-2.4-5.5M5 20l-1 2m15-2l1 2"></svg:path></svg:g>`,
})
export class LucideLabCauldronIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
