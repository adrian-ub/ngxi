import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPremium32RegularIcon],svg[fluent-premium-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4a1 1 0 0 0-.894.553l-4 8a1 1 0 0 0 .118 1.078l13 16a1 1 0 0 0 1.552 0l13-16a1 1 0 0 0 .118-1.078l-4-8A1 1 0 0 0 25 4zm-2.382 8l3-6h4.101l-1.5 6zm.483 2h5.164l3.227 10.328zm7.26 0h7.279L16 25.647zm9.374 0H26.9l-8.391 10.328zm5.647-2h-5.601l-1.5-6h4.101zm-7.663 0h-7.438l1.5-6h4.438z"></svg:path>`,
})
export class FluentPremium32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
