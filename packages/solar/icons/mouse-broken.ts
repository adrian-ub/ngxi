import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMouseBrokenIcon],svg[solar-mouse-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M19 15a7 7 0 1 1-14 0V9a7 7 0 0 1 14 0v2"></svg:path><svg:path d="M10.5 8.5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0z"></svg:path><svg:path stroke-linecap="round" d="M12 2v5"></svg:path></svg:g>`,
})
export class SolarMouseBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
