import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPaypalIcon],svg[iconoir-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 17.5L6 3h7c6 0 6 9 0 9H8.7l-1.2 5.5z"></svg:path><svg:path d="m6.8 21l3-14.5h7c6 0 6 9 0 9h-4.3L11.3 21z"></svg:path></svg:g>`,
})
export class IconoirPaypalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
