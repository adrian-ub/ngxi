import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRound4gPlusMobiledataIcon],svg[ic-round-4g-plus-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9c.55 0 1-.45 1-1s-.45-1-1-1h-5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-3c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1h1v2h-4V9zm7 2h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-.55 0-1 .45-1 1s.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1M7 12V8c0-.55-.45-1-1-1s-1 .45-1 1v4H3V8c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h3v2c0 .55.45 1 1 1s1-.45 1-1v-2c.55 0 1-.45 1-1s-.45-1-1-1"></svg:path>`,
})
export class IcRound4gPlusMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
