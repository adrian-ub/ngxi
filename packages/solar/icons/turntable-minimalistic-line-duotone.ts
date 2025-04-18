import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTurntableMinimalisticLineDuotoneIcon],svg[solar-turntable-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="m14 10.5l2.555-1.703A1 1 0 0 0 17 7.965V2.5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M17 12a5 5 0 1 1-3.5-4.771"></svg:path><svg:path stroke-linecap="round" d="M12 14a2 2 0 0 1-2-2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarTurntableMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
