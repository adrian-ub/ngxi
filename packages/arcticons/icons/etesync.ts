import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEtesyncIcon],svg[arcticons-etesync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 3.5l-6 6H9.51V18l-6 6l6 6v8.48H18l6 6l6-6h8.48V30l6-6l-6-6V9.51H30Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.67 29.18A9.26 9.26 0 0 0 24 14.75m-7.67 4.08A9.16 9.16 0 0 0 14.75 24A9.25 9.25 0 0 0 24 33.25"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 16.18v3.48l-4.78-4.79L24 10.09h0zm0 15.64v-3.47l4.78 4.78L24 37.91z"></svg:path>`,
})
export class ArcticonsEtesyncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
