import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarExplicitLinearIcon],svg[solar-explicit-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M15 7h-5a1 1 0 0 0-1 1v4m6 5h-5a1 1 0 0 1-1-1v-4m0 0h6"></svg:path></svg:g>`,
})
export class SolarExplicitLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
