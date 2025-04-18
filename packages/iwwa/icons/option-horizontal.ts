import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaOptionHorizontalIcon],svg[iwwa-option-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M31.013 23.112a3.113 3.113 0 1 1-.002-6.226a3.113 3.113 0 0 1 .002 6.226"></svg:path><svg:circle cx="20.329" cy="20" r="3.112"></svg:circle><svg:circle cx="9.643" cy="20" r="3.112"></svg:circle></svg:g>`,
})
export class IwwaOptionHorizontalIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
