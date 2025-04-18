import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCreditCardDefrostIcon],svg[hugeicons-credit-card-defrost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 9.5c-.037-2.252-.21-3.553-1.044-4.487a4.4 4.4 0 0 0-.555-.522C19.146 3.5 17.266 3.5 13.506 3.5h-3.002c-3.76 0-5.64 0-6.896.99a4.4 4.4 0 0 0-.555.523C2 6.193 2 7.963 2 11.5s0 5.306 1.053 6.487q.254.284.555.522c1.256.991 3.136.991 6.896.991h.996M2 8.5h20"></svg:path><svg:path d="M15.016 12.5c-3.17 2.794 2.304 4.752 0 8m3.2-8c-3.17 2.794 2.303 4.752 0 8m3.2-8c-3.17 2.794 2.303 4.752 0 8"></svg:path></svg:g>`,
})
export class HugeiconsCreditCardDefrostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
