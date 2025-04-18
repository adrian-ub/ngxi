import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSchoolBellIcon],svg[tabler-school-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 17a3 3 0 0 0 3 3m7.805-13.63l2.783-2.784a2 2 0 1 1 2.829 2.828L17.633 9.2"></svg:path><svg:path d="M16.505 7.495a5.105 5.105 0 0 1 .176 7.035l-.176.184l-1.867 1.867a3.48 3.48 0 0 0-1.013 2.234l-.008.23v.934c0 .327-.13.64-.36.871a.51.51 0 0 1-.652.06l-.07-.06l-9.385-9.384a.51.51 0 0 1 0-.722c.198-.198.456-.322.732-.353l.139-.008h.933c.848 0 1.663-.309 2.297-.864l.168-.157l1.867-1.867l.16-.153a5.105 5.105 0 0 1 7.059.153"></svg:path></svg:g>`,
})
export class TablerSchoolBellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
