import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPinLocation01Icon],svg[hugeicons-pin-location-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="7" r="4"></svg:circle><svg:path d="M12 11v7m3.847-2c1.647 2.113 2.47 3.17 2.04 4.006q-.06.116-.14.223c-.575.771-2.06.771-5.03.771h-1.435c-2.97 0-4.454 0-5.029-.771a1.6 1.6 0 0 1-.14-.223c-.43-.837.393-1.893 2.04-4.006"></svg:path></svg:g>`,
})
export class HugeiconsPinLocation01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
