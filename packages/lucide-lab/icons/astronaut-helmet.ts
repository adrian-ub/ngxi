import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabAstronautHelmetIcon],svg[lucide-lab-astronaut-helmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m10.6 13.4l6.3 6.1c.3.5.1 1.1-.4 1.4c-1.4.7-2.9 1.1-4.5 1.1a2 2 0 0 1-1.4-.6l-8-8A2 2 0 0 1 2 12a10 10 0 0 1 19.44-3.3c.3.7-.3 1.3-1 1.3H12"></svg:path><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path d="M16.2 18.8c3-1.9 4.4-5.5 3.5-8.8"></svg:path></svg:g>`,
})
export class LucideLabAstronautHelmetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
