import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabIglooIcon],svg[lucide-lab-igloo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 20.2c2.4-.7 4-1.9 4-3.2v-5a10 10 0 1 0-20 0v5c0 1.3 1.6 2.5 4 3.2"></svg:path><svg:path d="M6.5 3.65C7.5 5 9.6 6 12 6s4.5-1 5.5-2.35"></svg:path><svg:path d="M10.1 5.8c-1 .9-1.8 2.6-2 4.6m7.8 0c-.3-2-1-3.6-2-4.6"></svg:path><svg:path d="M3.3 7.1C5.3 9.5 8.5 11 12 11s6.7-1.5 8.7-3.9M2 12c.9 1.2 2.4 2.4 4.3 3.1"></svg:path><svg:path d="M6 21c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-4a6 6 0 1 0-12 0Z"></svg:path><svg:path d="M17.7 15.1c1.9-.7 3.4-1.9 4.3-3.1M10 22v-5a2 2 0 1 1 4 0v5"></svg:path></svg:g>`,
})
export class LucideLabIglooIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
