import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarReply2BrokenIcon],svg[solar-reply-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.5 12l5 5m-5-5l5-5m-5 5H11m3.5 0c1.667 0 5-1 5-5"></svg:path>`,
})
export class SolarReply2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
