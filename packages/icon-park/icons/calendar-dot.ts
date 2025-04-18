import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCalendarDotIcon],svg[icon-park-calendar-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="40" x="4" y="4" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" d="M4 14H44"></svg:path><svg:line x1="44" x2="44" y1="11" y2="23" stroke="#000"></svg:line><svg:path stroke="#fff" d="M12 22H16"></svg:path><svg:path stroke="#fff" d="M22 22H26"></svg:path><svg:path stroke="#fff" d="M32 22H36"></svg:path><svg:path stroke="#fff" d="M12 29H16"></svg:path><svg:path stroke="#fff" d="M22 29H26"></svg:path><svg:path stroke="#fff" d="M32 29H36"></svg:path><svg:path stroke="#fff" d="M12 36H16"></svg:path><svg:path stroke="#fff" d="M22 36H26"></svg:path><svg:path stroke="#fff" d="M32 36H36"></svg:path><svg:line x1="4" x2="4" y1="11" y2="23" stroke="#000"></svg:line></svg:g>`,
})
export class IconParkCalendarDotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
