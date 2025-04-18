import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsRuralPost24pxIcon],svg[healthicons-rural-post-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M3 19a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M18 5h3v2h-3zM3 5h7v2H3z"></svg:path><svg:path d="M11 12h5v8h-5z"></svg:path><svg:path d="M10 7H4v13h16V7h-2v11H6v-8h4z"></svg:path><svg:path d="M11 6h6v2h-6z"></svg:path><svg:path d="M13 10V4h2v6z"></svg:path></svg:g>`,
})
export class HealthiconsRuralPost24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
