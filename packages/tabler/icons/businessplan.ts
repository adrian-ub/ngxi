import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBusinessplanIcon],svg[tabler-businessplan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 6a5 3 0 1 0 10 0a5 3 0 1 0-10 0"></svg:path><svg:path d="M11 6v4c0 1.657 2.239 3 5 3s5-1.343 5-3V6"></svg:path><svg:path d="M11 10v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4"></svg:path><svg:path d="M11 14v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4M7 9H4.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H3m2 0v1m0-8v1"></svg:path></svg:g>`,
})
export class TablerBusinessplanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
