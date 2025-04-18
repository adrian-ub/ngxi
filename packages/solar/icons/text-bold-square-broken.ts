import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTextBoldSquareBrokenIcon],svg[solar-text-bold-square-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M8 7.522C8 6.682 8.681 6 9.522 6H12a3 3 0 1 1 0 6H8zM8 12h5a3 3 0 1 1 0 6H9.176C8.526 18 8 17.473 8 16.823z"></svg:path><svg:path stroke-linecap="round" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"></svg:path></svg:g>`,
})
export class SolarTextBoldSquareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
