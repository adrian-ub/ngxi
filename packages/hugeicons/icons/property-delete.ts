import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPropertyDeleteIcon],svg[hugeicons-property-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.998 12.5s.002-.47.002-1c0-4.478 0-6.718-1.391-8.109S15.979 2 11.5 2C7.022 2 4.782 2 3.391 3.391S2 7.021 2 11.5c0 4.478 0 6.718 1.391 8.109S7.021 21 11.5 21c.53 0 1-.002 1-.002M2 7h19m-11 9h1.5M6 16h1m3-4h6M6 12h1m9 4l3 3m0 0l3 3m-3-3l-3 3m3-3l3-3" color="currentColor"></svg:path>`,
})
export class HugeiconsPropertyDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
