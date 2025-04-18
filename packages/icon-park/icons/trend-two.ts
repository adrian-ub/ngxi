import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTrendTwoIcon],svg[icon-park-trend-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4 44H44"></svg:path><svg:path fill="#2F88FF" d="M4 26L12 28V38H4V26Z"></svg:path><svg:path fill="#2F88FF" d="M20 24L28 20V38H20V24Z"></svg:path><svg:path fill="#2F88FF" d="M36 16L44 12V38H36V16Z"></svg:path><svg:path stroke-linecap="round" d="M4 18L12 20L44 4H34"></svg:path></svg:g>`,
})
export class IconParkTrendTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
