import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabPlanetIcon],svg[lucide-lab-planet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="8"></svg:circle><svg:path d="M4.05 13c-1.7 1.8-2.5 3.5-1.8 4.5c1.1 1.9 6.4 1 11.8-2s8.9-7.1 7.7-9c-.6-1-2.4-1.2-4.7-.7"></svg:path></svg:g>`,
})
export class LucideLabPlanetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
