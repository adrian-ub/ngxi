import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCalendarMinusIcon],svg[lucide-calendar-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 19h6M16 2v4m5 9V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5M3 10h18M8 2v4"></svg:path>`,
})
export class LucideCalendarMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
