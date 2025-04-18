import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCalendarThirtyIcon],svg[icon-park-calendar-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="40" x="4" y="4" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" d="M4 14H44"></svg:path><svg:line x1="4" x2="4" y1="11" y2="23" stroke="#000"></svg:line><svg:line x1="44" x2="44" y1="11" y2="23" stroke="#000"></svg:line><svg:path stroke="#fff" d="M28 22V36H36V22H28Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M12 22H20V36H12"></svg:path><svg:path stroke="#fff" d="M20 29H14"></svg:path></svg:g>`,
})
export class IconParkCalendarThirtyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
