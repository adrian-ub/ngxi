import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLibretubeIcon],svg[arcticons-libretube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.022 22.268L13.979 7.232c-1.334-.77-3 .193-3 1.732v30.072c0 1.54 1.666 2.502 3 1.732L40.02 25.732c1.334-.77 1.334-2.694 0-3.464Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.841 24l-13.862-8.004v16.008z"></svg:path>`,
})
export class ArcticonsLibretubeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
