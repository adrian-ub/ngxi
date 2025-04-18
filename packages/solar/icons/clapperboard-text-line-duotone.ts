import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarClapperboardTextLineDuotoneIcon],svg[solar-clapperboard-text-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M21.5 8h-19M7 8l3.5-5.5m3 5.5L17 2.5M6.5 14h8m-8 3.5H12" opacity=".5"></svg:path></svg:g>`,
})
export class SolarClapperboardTextLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
