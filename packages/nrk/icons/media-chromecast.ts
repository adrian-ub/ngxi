import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaChromecastIcon],svg[nrk-media-chromecast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 5H3v4H1V3h22v18H13v-2h8zM5 21h2c0-3.552-2.448-6-6-6v2c2.448 0 4 1.552 4 4m6 0H9c0-4.448-3.552-8-8-8v-2c5.552 0 10 4.448 10 10M1 19c1 0 2 1 2 2H1z" clip-rule="evenodd"></svg:path>`,
})
export class NrkMediaChromecastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
