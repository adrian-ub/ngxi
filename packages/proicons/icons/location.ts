import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsLocationIcon],svg[proicons-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6.4 4.76a7.92 7.92 0 0 1 11.2 11.2l-4.186 4.186a2 2 0 0 1-2.828 0L6.4 15.96a7.92 7.92 0 0 1 0-11.2Z"></svg:path><svg:circle cx="12" cy="10.36" r="3" stroke-linecap="round"></svg:circle></svg:g>`,
})
export class ProiconsLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
