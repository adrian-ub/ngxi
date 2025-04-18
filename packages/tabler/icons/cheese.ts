import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCheeseIcon],svg[tabler-cheese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4.519 20.008L21 20v-3.5a2 2 0 1 1 0-4V9H4.278"></svg:path><svg:path d="m21 9l-9.385-4.992c-2.512.12-4.758 1.42-6.327 3.425C3.865 9.253 3 11.654 3 14.287c0 2.117.56 4.085 1.519 5.721M15 13v.01M8 13v.01M11 16v.01"></svg:path></svg:g>`,
})
export class TablerCheeseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
