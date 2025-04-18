import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPlayDealsIcon],svg[arcticons-play-deals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="34.796" cy="35.969" r="5.818" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13.015" cy="12.471" r="5.818" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.697 41.151a4.113 4.113 0 0 0 5.803.003l28.79-28.52a4.08 4.08 0 0 0 .028-5.772l-.014-.014a4.114 4.114 0 0 0-5.803-.003c-9.039 8.97-19.745 19.557-28.79 28.52a4.08 4.08 0 0 0-.014 5.786"></svg:path>`,
})
export class ArcticonsPlayDealsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
