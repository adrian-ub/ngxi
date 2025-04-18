import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilPagerdutyIcon],svg[uil-pagerduty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3c-1.6-.8-2.7-1-5.2-1H6v12.1h5.8c2.3 0 4-.1 5.5-1.1c1.6-1.1 2.6-3 2.5-5c.1-2.1-1-4-2.8-5m-4.6 8.6H8.9v-7h3.3c3 0 4.5 1 4.5 3.4c.1 2.6-1.8 3.6-4.3 3.6M6 22h2.9v-5.3H6z"></svg:path>`,
})
export class UilPagerdutyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
