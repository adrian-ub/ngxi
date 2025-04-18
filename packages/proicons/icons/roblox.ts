import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsRobloxIcon],svg[proicons-roblox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="16.02" height="16.02" x="6.336" y="2.19" rx="2.5" transform="rotate(15 6.336 2.19)"></svg:rect><svg:rect width="5.34" height="5.34" x="10.112" y="8.73" rx=".8" transform="rotate(15 10.112 8.73)"></svg:rect></svg:g>`,
})
export class ProiconsRobloxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
