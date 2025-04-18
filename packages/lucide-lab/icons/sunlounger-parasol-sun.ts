import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabSunloungerParasolSunIcon],svg[lucide-lab-sunlounger-parasol-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="20" cy="4" r="2"></svg:circle><svg:path d="M2.4 14.4a7 7 0 0 1 13.2-4.8ZM9 12l3 9m-9 0l.7-2.1c.2-.5.7-.9 1.3-.9h12c.5 0 1.3-.4 1.6-.8L22 13m-1 8l-3-3"></svg:path></svg:g>`,
})
export class LucideLabSunloungerParasolSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
