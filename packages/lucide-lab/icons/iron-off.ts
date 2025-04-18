import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabIronOffIcon],svg[lucide-lab-iron-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.9 7.3C11.4 4 8.7 2 8 2m14 14.3V8a2 2 0 0 0-4 0v4.3M2 2l20 20M6 11h.01M10 11h.01M6 15h.01M10 15h.01M4.7 4.7C3.3 6.4 2 9 2 12v7h12v-5M3 22h10"></svg:path>`,
})
export class LucideLabIronOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
