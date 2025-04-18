import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsServerIcon],svg[proicons-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="18.5" height="7.5" x="2.75" y="2.751" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="2"></svg:rect><svg:circle cx="6.25" cy="6.501" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="10.25" cy="6.501" r="1.25" fill="currentColor"></svg:circle><svg:rect width="18.5" height="7.5" x="2.75" y="13.749" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="2"></svg:rect><svg:circle cx="6.25" cy="17.499" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="10.25" cy="17.499" r="1.25" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsServerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
