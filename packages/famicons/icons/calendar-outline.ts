import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsCalendarOutlineIcon],svg[famicons-calendar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="416" height="384" x="48" y="80" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" rx="48"></svg:rect><svg:circle cx="296" cy="232" r="24" fill="currentColor"></svg:circle><svg:circle cx="376" cy="232" r="24" fill="currentColor"></svg:circle><svg:circle cx="296" cy="312" r="24" fill="currentColor"></svg:circle><svg:circle cx="376" cy="312" r="24" fill="currentColor"></svg:circle><svg:circle cx="136" cy="312" r="24" fill="currentColor"></svg:circle><svg:circle cx="216" cy="312" r="24" fill="currentColor"></svg:circle><svg:circle cx="136" cy="392" r="24" fill="currentColor"></svg:circle><svg:circle cx="216" cy="392" r="24" fill="currentColor"></svg:circle><svg:circle cx="296" cy="392" r="24" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 48v32m256-32v32"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M464 160H48"></svg:path>`,
})
export class FamiconsCalendarOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
