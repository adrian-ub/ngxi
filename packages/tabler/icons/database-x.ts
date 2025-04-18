import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDatabaseXIcon],svg[tabler-database-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3s-3.582-3-8-3s-8 1.343-8 3"></svg:path><svg:path d="M4 6v6c0 1.657 3.582 3 8 3q.807 0 1.57-.058M20 13.5V6"></svg:path><svg:path d="M4 12v6c0 1.657 3.582 3 8 3q.577 0 1.132-.03M22 22l-5-5m0 5l5-5"></svg:path></svg:g>`,
})
export class TablerDatabaseXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
