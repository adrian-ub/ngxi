import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeSquare3BoldDuotoneIcon],svg[solar-minimize-square-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.5 12a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 1.5 0v1.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-3.72 3.72h1.94a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 17.5c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5"></svg:path>`,
})
export class SolarMinimizeSquare3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
