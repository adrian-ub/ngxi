import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideSquarePowerIcon],svg[lucide-square-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 7v4M7.998 9.003a5 5 0 1 0 8-.005"></svg:path><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect></svg:g>`,
})
export class LucideSquarePowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
