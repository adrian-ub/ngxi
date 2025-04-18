import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiDirectionDownRightIcon],svg[wi-direction-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.04 10.08c0-.3.09-.55.26-.73c.2-.19.46-.28.79-.28c.3 0 .55.09.73.28l6.05 6.05v-1.95q0-.45.3-.75c.3-.3.45-.3.75-.3c.29 0 .54.1.74.31s.3.45.3.75v4.48q0 .45-.3.75c-.3.3-.45.3-.74.3h-4.48c-.29 0-.54-.1-.74-.3s-.3-.45-.3-.75c0-.29.1-.54.3-.73s.45-.29.74-.29h1.93l-6.08-6.06a1.32 1.32 0 0 1-.25-.78"></svg:path>`,
})
export class WiDirectionDownRightIcon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
