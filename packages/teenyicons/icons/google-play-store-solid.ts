import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGooglePlayStoreSolidIcon],svg[teenyicons-google-play-store-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.251.066a.5.5 0 0 1 .5.002l7.843 4.575l-2.427 2.184L1 1.277V.5a.5.5 0 0 1 .251-.434M1 2.623v9.754L6.42 7.5zm0 11.1v.777a.5.5 0 0 0 .752.432l7.842-4.575l-2.427-2.184zm9.501-3.895l3.25-1.896a.5.5 0 0 0 0-.864l-3.25-1.896L7.914 7.5z"></svg:path>`,
})
export class TeenyiconsGooglePlayStoreSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
