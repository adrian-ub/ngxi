import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDomeIcon],svg[hugeicons-dome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.856 22C6.313 20.014 6 17.687 6 15.2C6 7.91 8.686 2 12 2s6 5.91 6 13.2c0 2.487-.313 4.814-.856 6.8M3 22h18"></svg:path><svg:path d="M15.552 5c-.95 4.205-6.432 2.734-8.805 6.196a1.405 1.405 0 0 0 .008 1.603C9.235 16.267 15.599 14.792 17.5 19"></svg:path><svg:path d="M8.448 5c.95 4.205 6.432 2.734 8.805 6.196c.33.481.331 1.128-.008 1.603C14.765 16.267 8.401 14.792 6.5 19"></svg:path></svg:g>`,
})
export class HugeiconsDomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
