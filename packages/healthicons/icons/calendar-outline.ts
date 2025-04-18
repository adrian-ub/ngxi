import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCalendarOutlineIcon],svg[healthicons-calendar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17 25h-2v2h2zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm10 2h-2v2h2zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm10 2h-2v2h2zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zM17 33h-2v2h2zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm10 2h-2v2h2zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm10 2h-2v2h2zm-2-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10 11a1 1 0 0 0-1 1v27a1 1 0 0 0 1 1h28c.55 0 1-.449 1-1.002V12.002c0-.554-.45-1.002-1-1.002h-3V9h3c1.658 0 3 1.347 3 3.002v26.996A3 3 0 0 1 38 42H10a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h5v2zm21 0H19V9h12z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M39 20H9v-2h30z" clip-rule="evenodd"></svg:path><svg:path d="M15 7a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0zm16 0a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0z"></svg:path></svg:g>`,
})
export class HealthiconsCalendarOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
