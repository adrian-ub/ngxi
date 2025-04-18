import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDatabaseEditIcon],svg[tabler-database-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3s-3.582-3-8-3s-8 1.343-8 3"></svg:path><svg:path d="M4 6v6c0 1.657 3.582 3 8 3q.718 0 1.402-.046M20 12V6"></svg:path><svg:path d="M4 12v6c0 1.526 3.04 2.786 6.972 2.975m7.448-5.365a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z"></svg:path></svg:g>`,
})
export class TablerDatabaseEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
