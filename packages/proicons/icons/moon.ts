import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsMoonIcon],svg[proicons-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M11.578 3.512a6.307 6.307 0 0 0 8.91 8.91a.45.45 0 0 1 .466-.095c.176.067.29.24.275.428A9.255 9.255 0 1 1 5.461 5.45a9.22 9.22 0 0 1 5.784-2.68a.42.42 0 0 1 .428.275c.06.16.02.34-.095.466Z"></svg:path>`,
})
export class ProiconsMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
