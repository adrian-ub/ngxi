import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsImplayerMobileIcon],svg[arcticons-implayer-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.026 20.188V38.53c0 .468.078.91.219 1.315M38.776 28.22l1.363-.787c2.643-1.526 2.643-5.34 0-6.866L14.972 6.037c-2.642-1.526-5.946.381-5.946 3.433"></svg:path><svg:circle cx="9.026" cy="14.829" r="3.147" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.929 30.441c-2.013-.512-3.864-2.686-4.944-8.843c0 0-3.038 3.318-4.411 7.396c0 0-2.786-5.797-5.344-10.075c.24 4.558-1.983 21.29-5.258 23.044a3.9 3.9 0 0 1-3.234.33"></svg:path>`,
})
export class ArcticonsImplayerMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
