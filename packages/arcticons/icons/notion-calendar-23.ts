import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNotionCalendar23Icon],svg[arcticons-notion-calendar-23-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M16.928 27.492c0-2.37 1.896-4.366 4.109-4.482s4.267 1.673 4.267 4.043c0 1.106-.475 2.237-1.265 3.069c-1.738 1.513-7.11 5.903-7.11 5.903l8.375-.439m3.42-1.258c.883.694 1.837.983 3.98.87l.499-.026c1.767-.092 3.2-1.6 3.2-3.367h0a3.005 3.005 0 0 0-3.2-3.031"></svg:path><svg:path d="M28.722 23.676c.886-.784 1.84-1.17 3.983-1.277l.498-.024a3.005 3.005 0 0 1 3.2 3.032h0c0 1.767-1.433 3.274-3.2 3.367m-2.459.129l2.459-.129"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m39.153 41.418l-24.717 1.08a2.97 2.97 0 0 1-3.097-2.966v-25.21a2.97 2.97 0 0 1 2.838-2.966l25.956-1.133a1.78 1.78 0 0 1 1.859 1.779v26.451a2.97 2.97 0 0 1-2.839 2.965"></svg:path><svg:path d="M11.339 22.117v-2.97c0-.954.75-1.738 1.703-1.78l27.091-1.182a1.78 1.78 0 0 1 1.859 1.779v3.803"></svg:path><svg:path d="M36.661 10.248V7.874a2.374 2.374 0 0 0-2.477-2.372L8.279 6.633a2.374 2.374 0 0 0-2.27 2.372v25.65a2.374 2.374 0 0 0 2.466 2.373l2.864-.112"></svg:path></svg:g>`,
})
export class ArcticonsNotionCalendar23Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
