import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabButterflyIcon],svg[lucide-lab-butterfly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15.8 2C12 3.8 12 9 12 9s0-5.2-3.8-7M12 9v11"></svg:path><svg:path d="M20 5c-3.5 0-6.5 3.9-8 6.3C10.5 8.9 7.5 5 4 5a2 2 0 0 0-2 2c0 2.3.6 4.4 1.5 5.6C4 13.5 4.9 14 6 14h2c-.9.4-2.1.9-2.6 1.5c-1.6 1.6-.9 3.4.7 4.9c1.6 1.6 3.4 2.3 4.9.7c.3-.3 1-1.1 1-1.1s.6.8 1 1.1c1.6 1.6 3.4.9 4.9-.7c1.6-1.6 2.3-3.4.7-4.9c-.5-.5-1.7-1.1-2.6-1.5h2c1.1 0 2-.5 2.5-1.4c.9-1.2 1.5-3.3 1.5-5.6a2 2 0 0 0-2-2"></svg:path></svg:g>`,
})
export class LucideLabButterflyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
