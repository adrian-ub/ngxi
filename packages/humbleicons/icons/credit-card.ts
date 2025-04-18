import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsCreditCardIcon],svg[humbleicons-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 10V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M4 10h16M4 10v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6M7 15h5"></svg:path>`,
})
export class HumbleiconsCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
