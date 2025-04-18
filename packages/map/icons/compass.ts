import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapCompassIcon],svg[map-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 49C11.766 49 1 38.233 1 25S11.766 1 25 1s24 10.766 24 24s-10.767 24-24 24m0-44C13.972 5 5 13.972 5 25s8.972 20 20 20s20-8.972 20-20S36.028 5 25 5m.045 3.25S18 20.321 18 24v2c0 3.678 7.066 16 7.066 16S32 29.934 32 26.256v-2.262c0-3.679-6.955-15.744-6.955-15.744M25 29a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class MapCompassIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
