import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabBarberPoleIcon],svg[lucide-lab-barber-pole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6h10M7 22h10m-9 0V6a4 4 0 0 1 8 0v16M8 11.5l8-4M8 16l8-4m-8 8.5l8-4"></svg:path>`,
})
export class LucideLabBarberPoleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
