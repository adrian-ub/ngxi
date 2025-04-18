import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons90Icon],svg[arcticons-90-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17.968" cy="21.724" r="4.468" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.895 29.1c.745.975 1.88 1.645 3.76 1.645h.313c2.468 0 4.469-2 4.469-4.469v-4.552"></svg:path><svg:rect width="8.937" height="13.489" x="25.563" y="17.255" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.468" ry="4.468"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class Arcticons90Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
