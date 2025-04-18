import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFacebook02Icon],svg[hugeicons-facebook-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.182 10.333c-.978 0-1.182.192-1.182 1.111v1.667c0 .92.204 1.111 1.182 1.111h2.363v6.667c0 .92.205 1.111 1.182 1.111h2.364c.978 0 1.182-.192 1.182-1.111v-6.667h2.654c.741 0 .932-.135 1.136-.806l.507-1.666c.349-1.149.133-1.417-1.137-1.417h-3.16V7.556c0-.614.529-1.112 1.181-1.112h3.364c.978 0 1.182-.191 1.182-1.11V3.11C19 2.191 18.796 2 17.818 2h-3.364c-3.263 0-5.909 2.487-5.909 5.556v2.777z" color="currentColor"></svg:path>`,
})
export class HugeiconsFacebook02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
