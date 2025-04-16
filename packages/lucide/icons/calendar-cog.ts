import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCalendarCogIcon],svg[lucide-calendar-cog-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m15.2 16.9l-.9-.4m.9 2.6l-.9.4M16 2v4m.9 9.2l-.4-.9m.4 6.5l-.4.9m3-7.4l-.4.9m.4 6.5l-.4-.9M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6m10.7-5.5l-.9.4m.9 2.6l-.9-.4M3 10h18M8 2v4"></svg:path><svg:circle cx="18" cy="18" r="3"></svg:circle></svg:g>`,
})
export class LucideCalendarCogIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
