import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShareitIcon],svg[arcticons-shareit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="9.321" r="6.821"></svg:circle><svg:path d="M30.623 7.69c7.142 0 16.186 8.862 12.842 21.704c-3.126-13.59-9.703-15.73-13.765-16.328"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="10.375" cy="32.921" r="6.821"></svg:circle><svg:path d="M5.65 28.001c-3.57-6.185-.418-18.45 12.376-21.974c-10.207 9.502-8.77 16.268-7.258 20.084"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="37.625" cy="32.921" r="6.821"></svg:circle><svg:path d="M35.727 39.472c-3.57 6.185-15.769 9.587-25.218.27c13.333 4.088 18.474-.539 21.023-3.757"></svg:path></svg:g>`,
})
export class ArcticonsShareitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
