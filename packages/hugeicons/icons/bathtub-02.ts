import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBathtub02Icon],svg[hugeicons-bathtub-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12h-7a3 3 0 0 1-1.8-.6l-2.4-1.8A3 3 0 0 0 9 9H2"></svg:path><svg:path d="M3 9v2c0 3.771 0 5.657 1.172 6.828S7.229 19 11 19h3c2.809 0 4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C21 16.213 21 14.81 21 12m-3 7v2M6 19v2M5 9V4.5a1.5 1.5 0 1 1 3 0V5"></svg:path></svg:g>`,
})
export class HugeiconsBathtub02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
