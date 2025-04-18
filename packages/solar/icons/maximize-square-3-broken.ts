import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeSquare3BrokenIcon],svg[solar-maximize-square-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.178 21.894 17.055 21.993 13 22M2 11c.008-4.055.107-6.178 1.464-7.536c.974-.973 2.343-1.3 4.536-1.409"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12 12l5-5m0 0h-3.75M17 7v3.75"></svg:path><svg:path d="M2 18c0-1.886 0-2.828.586-3.414S4.114 14 6 14s2.828 0 3.414.586S10 16.114 10 18s0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18Z"></svg:path></svg:g>`,
})
export class SolarMaximizeSquare3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
