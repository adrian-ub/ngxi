import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRewind10SecondsBackLineDuotoneIcon],svg[solar-rewind-10-seconds-back-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14 4.5L12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-4.1 2.468-7.625 6-9.168" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="m7.5 10.5l2.5-2v7"></svg:path><svg:path d="M12.5 13.75v-3.5a1.75 1.75 0 1 1 3.5 0v3.5a1.75 1.75 0 1 1-3.5 0Z"></svg:path></svg:g>`,
})
export class SolarRewind10SecondsBackLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
