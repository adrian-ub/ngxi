import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsAngryLightIcon],svg[lets-icons-angry-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-linecap="round"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" d="M8.209 16.622c.421-.365.999-.646 1.652-.834A7.8 7.8 0 0 1 12 15.5c.744 0 1.48.098 2.139.288c.654.188 1.23.469 1.652.834M17 8l-3 2M7 8l3 2"></svg:path><svg:circle cx="8" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="10" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsAngryLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
