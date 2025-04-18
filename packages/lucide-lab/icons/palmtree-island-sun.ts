import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabPalmtreeIslandSunIcon],svg[lucide-lab-palmtree-island-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="6" cy="7" r="3"></svg:circle><svg:path d="M16 14s1-3 1-8V4s-1-2-3-2c-1 0-2 .5-2 .5"></svg:path><svg:path d="M13 8a4 4 0 0 1 8 0"></svg:path><svg:path d="M17 4s1-2 3-2c1 0 2 .5 2 .5M19.75 19A8 8 0 0 0 4 21"></svg:path><svg:path d="M2 20c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1"></svg:path></svg:g>`,
})
export class LucideLabPalmtreeIslandSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
