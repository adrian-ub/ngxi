import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCreditCardIcon],svg[proicons-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="18.5" height="14" x="2.75" y="5" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path d="M2.75 9.5h18.5"></svg:path><svg:path stroke-linecap="round" d="M14.75 14.25h3"></svg:path></svg:g>`,
})
export class ProiconsCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
