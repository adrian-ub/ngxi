import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabMotorRacingHelmetIcon],svg[lucide-lab-motor-racing-helmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 12.2a10 10 0 1 0-19.4 3.2c.2.5.8 1.1 1.3 1.3l13.2 5.1c.5.2 1.2 0 1.6-.3l2.6-2.6c.4-.4.7-1.2.7-1.7Z"></svg:path><svg:path d="m21.8 18l-10.5-4a2 2.06 0 0 1 .7-4h9.8"></svg:path></svg:g>`,
})
export class LucideLabMotorRacingHelmetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
