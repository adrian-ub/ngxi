import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTumblrIcon],svg[jam-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.888 15.905s-.614.683-1.781.683c-1.168 0-1.69-.683-1.69-1.692V9.18h3.775V5.715H7.417V0H4.575C4.13 2.564 2.38 4.7.005 5.748v3.431h2.773v6.584c0 .914.891 4.237 5.438 4.237c2.672 0 3.778-1.662 3.778-1.662z"></svg:path>`,
})
export class JamTumblrIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
