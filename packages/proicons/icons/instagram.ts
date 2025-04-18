import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsInstagramIcon],svg[proicons-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="17" height="17" x="3.5" y="3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="5.5"></svg:rect><svg:circle cx="12" cy="12" r="3.606" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></svg:circle><svg:circle cx="16.894" cy="7.106" r="1.03" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsInstagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
