import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSendSquareLineDuotoneIcon],svg[solar-send-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 12h-7m0 0l3 3m-3-3l3-3"></svg:path><svg:path stroke-linecap="round" d="M7 16V8"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSendSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
