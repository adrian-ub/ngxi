import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideClockAlertIcon],svg[lucide-clock-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 6v6l4 2"></svg:path><svg:path d="M16 21.16a10 10 0 1 1 5-13.516M20 11.5v6m0 4h.01"></svg:path></svg:g>`,
})
export class LucideClockAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
