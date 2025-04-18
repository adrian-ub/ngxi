import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLadleBrokenIcon],svg[solar-ladle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 5.684a3.684 3.684 0 0 1 7.368 0M22 14.5v1.184a6.316 6.316 0 0 1-12.632 0V9.158"></svg:path><svg:path d="M16 12c-3.054 0-6.5 1.12-6.5 2.5S12.946 17 16 17s6-1.12 6-2.5c0-.72-.8-1.369-2-1.825"></svg:path></svg:g>`,
})
export class SolarLadleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
