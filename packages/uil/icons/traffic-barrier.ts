import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilTrafficBarrierIcon],svg[uil-traffic-barrier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5h-1V4a1 1 0 0 0-2 0v1H6V4a1 1 0 0 0-2 0v1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v7a1 1 0 0 0 2 0v-7h12v7a1 1 0 0 0 2 0v-7h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M4 9.52V7h2.52ZM5.34 11l4-4h3.33l-4 4Zm6.15 0l4-4h3.18l-4 4ZM20 11h-2.51L20 8.49Z"></svg:path>`,
})
export class UilTrafficBarrierIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
