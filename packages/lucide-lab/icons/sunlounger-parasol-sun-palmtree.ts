import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabSunloungerParasolSunPalmtreeIcon],svg[lucide-lab-sunlounger-parasol-sun-palmtree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="4" cy="4" r="2"></svg:circle><svg:path d="M16 14s1-3 1-8V4s-1-2-3-2c-1 0-2 .5-2 .5"></svg:path><svg:path d="M13 8a4 4 0 0 1 8 0"></svg:path><svg:path d="M17 4s1-2 3-2c1 0 2 .5 2 .5M4 14l3-5l5 3Zm4-1l2 8m-7 0l.7-2.1c.2-.5.7-.9 1.3-.9h12c.5 0 1.3-.4 1.6-.8L22 13m-1 8l-3-3"></svg:path></svg:g>`,
})
export class LucideLabSunloungerParasolSunPalmtreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
