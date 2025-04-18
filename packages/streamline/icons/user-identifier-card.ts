import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineUserIdentifierCardIcon],svg[streamline-user-identifier-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.358 2.266h11.284s.858 0 .858.858v7.752s0 .858-.858.858H1.358s-.858 0-.858-.858V3.124s0-.858.858-.858M9.36 5.88h1.986M9.36 7.849h1.986"></svg:path><svg:path d="M3.507 6.208a1.64 1.64 0 1 0 3.282 0a1.64 1.64 0 0 0-3.282 0"></svg:path><svg:path d="M2.654 9.473a3.2 3.2 0 0 1 1.064-1.19a2.6 2.6 0 0 1 1.43-.434c.502 0 .994.15 1.431.434a3.2 3.2 0 0 1 1.064 1.19"></svg:path></svg:g>`,
})
export class StreamlineUserIdentifierCardIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
