import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRewind15SecondsBackLineDuotoneIcon],svg[solar-rewind-15-seconds-back-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14 4.5L12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-4.1 2.468-7.625 6-9.168" opacity=".5"></svg:path><svg:path d="M16.5 8.5h-2.64a.5.5 0 0 0-.474.342l-.667 2a.5.5 0 0 0 .475.658H14.5a2 2 0 1 1 0 4h-2"></svg:path><svg:path stroke-linejoin="round" d="m7.5 10.5l2.5-2v7"></svg:path></svg:g>`,
})
export class SolarRewind15SecondsBackLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
