import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnStarHalfIcon],svg[typcn-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 4.3c-.9 1.9-2.2 4.8-2.2 4.8s-3.1.4-5.2.6c-.2 0-.4.2-.4.3c-.1.2 0 .4.1.5c1.6 1.4 3.9 3.6 3.9 3.6s-.6 3.1-1.1 5.2c0 .2 0 .4.2.5c.2.2.4.2.6.1c1.8-1 4.6-2.6 4.6-2.6V4c-.2 0-.4.2-.5.3"></svg:path>`,
})
export class TypcnStarHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
