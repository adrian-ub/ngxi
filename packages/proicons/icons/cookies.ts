import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCookiesIcon],svg[proicons-cookies-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.076 10.535a2.75 2.75 0 0 0 3.89 0v0c.127-.128.362-.076.393.102a9.25 9.25 0 0 1-15.65 8.154a9.25 9.25 0 0 1 8.154-15.65c.178.031.23.266.102.394v0a2.75 2.75 0 0 0 2.333 4.667a2.75 2.75 0 0 0 .778 2.333"></svg:path><svg:circle cx="8.5" cy="15.5" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="7.5" cy="9.5" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="12.5" cy="12.5" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="15.5" cy="16.5" r="1.25" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsCookiesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
