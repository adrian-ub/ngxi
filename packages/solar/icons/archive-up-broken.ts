import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarArchiveUpBrokenIcon],svg[solar-archive-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 21v-9m0 0l3 3.333M12 12l-3 3.333"></svg:path><svg:path d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828S16.271 21 12.5 21h-1m-8-14v6c0 3.771 0 5.657 1.172 6.828c.704.705 1.668.986 3.144 1.098M12 3H4c-.943 0-1.414 0-1.707.293S2 4.057 2 5s0 1.414.293 1.707S3.057 7 4 7h16c.943 0 1.414 0 1.707-.293S22 5.943 22 5s0-1.414-.293-1.707S20.943 3 20 3h-4"></svg:path></svg:g>`,
})
export class SolarArchiveUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
